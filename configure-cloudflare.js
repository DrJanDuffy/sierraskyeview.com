#!/usr/bin/env node

/**
 * Cloudflare Transformations Configuration Script
 * 
 * This script configures Cloudflare to properly handle sitemap.xml and robots.txt
 * redirects, ensuring Google Search Console can access them correctly.
 * 
 * Usage: node configure-cloudflare.js
 */

const https = require('https');

// Cloudflare API Configuration
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const ZONE_ID = '6da0cfdcbf41ec231cc5e2d3cd0ed160';
const DOMAIN = 'sierraskyeview.com';

// API Base URL
const API_BASE = 'https://api.cloudflare.com/client/v4';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function makeApiRequest(endpoint, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${API_BASE}${endpoint}`);
    
    const options = {
      hostname: url.hostname,
      port: 443,
      path: url.pathname + url.search,
      method: method,
      headers: {
        'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      
      res.on('data', (chunk) => {
        body += chunk;
      });
      
      res.on('end', () => {
        try {
          const result = JSON.parse(body);
          resolve({ status: res.statusCode, data: result });
        } catch (error) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

async function getCurrentTransformations() {
  log('📋 Getting current Cloudflare transformations...', 'cyan');
  
  try {
    const response = await makeApiRequest(`/zones/${ZONE_ID}/settings/transformations`);
    
    if (response.status === 200) {
      log('✅ Successfully retrieved transformation settings', 'green');
      return response.data;
    } else {
      log(`❌ Failed to get transformations: ${response.status}`, 'red');
      log(JSON.stringify(response.data, null, 2), 'red');
      return null;
    }
  } catch (error) {
    log(`❌ Error getting transformations: ${error.message}`, 'red');
    return null;
  }
}

async function createTransformRules() {
  log('🔧 Creating transform rules for sitemap and robots.txt...', 'cyan');

  const rules = [
    {
      name: 'Sitemap Redirect - Non-www to www',
      description: 'Redirect sitemap.xml from non-www to www with 301 status',
      expression: 'http.host eq "sierraskyeview.com" and http.request.uri.path eq "/sitemap.xml"',
      actions: [
        {
          type: 'rewrite',
          uri: {
            path: {
              value: '/sitemap.xml'
            }
          }
        },
        {
          type: 'set_status',
          status: 301
        },
        {
          type: 'set_dynamic',
          expression: '"https://www.sierraskyeview.com/sitemap.xml"'
        }
      ],
      enabled: true
    },
    {
      name: 'Robots.txt Redirect - Non-www to www',
      description: 'Redirect robots.txt from non-www to www with 301 status',
      expression: 'http.host eq "sierraskyeview.com" and http.request.uri.path eq "/robots.txt"',
      actions: [
        {
          type: 'rewrite',
          uri: {
            path: {
              value: '/robots.txt'
            }
          }
        },
        {
          type: 'set_status',
          status: 301
        },
        {
          type: 'set_dynamic',
          expression: '"https://www.sierraskyeview.com/robots.txt"'
        }
      ],
      enabled: true
    },
    {
      name: 'General Redirect - Non-www to www',
      description: 'Redirect all non-www traffic to www with 301 status',
      expression: 'http.host eq "sierraskyeview.com"',
      actions: [
        {
          type: 'set_status',
          status: 301
        },
        {
          type: 'set_dynamic',
          expression: '"https://www.sierraskyeview.com" + http.request.uri.path + http.request.uri.query'
        }
      ],
      enabled: true
    }
  ];

  for (const rule of rules) {
    try {
      log(`   Creating rule: ${rule.name}`, 'yellow');
      
      const response = await makeApiRequest(`/zones/${ZONE_ID}/rules/transform`, 'POST', {
        expression: rule.expression,
        actions: rule.actions,
        enabled: rule.enabled,
        description: rule.description
      });

      if (response.status === 200 || response.status === 201) {
        log(`   ✅ Successfully created: ${rule.name}`, 'green');
      } else {
        log(`   ❌ Failed to create: ${rule.name}`, 'red');
        log(`   Status: ${response.status}`, 'red');
        log(JSON.stringify(response.data, null, 2), 'red');
      }
    } catch (error) {
      log(`   ❌ Error creating rule ${rule.name}: ${error.message}`, 'red');
    }
  }
}

async function updateTransformationsSettings() {
  log('⚙️ Updating transformation settings...', 'cyan');

  const settings = {
    enable_transform_rules: true,
    enable_managed_transforms: true
  };

  try {
    const response = await makeApiRequest(`/zones/${ZONE_ID}/settings/transformations`, 'PATCH', settings);

    if (response.status === 200) {
      log('✅ Successfully updated transformation settings', 'green');
      return response.data;
    } else {
      log(`❌ Failed to update settings: ${response.status}`, 'red');
      log(JSON.stringify(response.data, null, 2), 'red');
      return null;
    }
  } catch (error) {
    log(`❌ Error updating settings: ${error.message}`, 'red');
    return null;
  }
}

async function testSitemapAccess() {
  log('🧪 Testing sitemap access after configuration...', 'cyan');

  const testUrls = [
    'https://sierraskyeview.com/sitemap.xml',
    'https://www.sierraskyeview.com/sitemap.xml',
    'https://sierraskyeview.com/robots.txt',
    'https://www.sierraskyeview.com/robots.txt'
  ];

  for (const url of testUrls) {
    try {
      const response = await makeApiRequest(url.replace('https://sierraskyeview.com', '').replace('https://www.sierraskyeview.com', ''));
      log(`   ${url}: ${response.status}`, response.status === 200 ? 'green' : 'yellow');
    } catch (error) {
      log(`   ${url}: Error - ${error.message}`, 'red');
    }
  }
}

async function main() {
  log('🚀 Cloudflare Transformations Configuration', 'bright');
  log('==========================================', 'bright');
  
  if (!CLOUDFLARE_API_TOKEN) {
    log('❌ CLOUDFLARE_API_TOKEN environment variable is required', 'red');
    log('   Set it with: export CLOUDFLARE_API_TOKEN="your_token_here"', 'yellow');
    process.exit(1);
  }

  log(`Domain: ${DOMAIN}`, 'blue');
  log(`Zone ID: ${ZONE_ID}`, 'blue');
  log('');

  try {
    // Step 1: Get current transformations
    const currentSettings = await getCurrentTransformations();
    if (currentSettings) {
      log('Current settings:', 'blue');
      log(JSON.stringify(currentSettings, null, 2), 'blue');
      log('');
    }

    // Step 2: Update transformation settings
    await updateTransformationsSettings();
    log('');

    // Step 3: Create transform rules
    await createTransformRules();
    log('');

    // Step 4: Test access
    await testSitemapAccess();
    log('');

    log('✅ Configuration complete!', 'green');
    log('', 'reset');
    log('Next steps:', 'bright');
    log('1. Wait 5-10 minutes for changes to propagate', 'yellow');
    log('2. Test sitemap access manually', 'yellow');
    log('3. Resubmit sitemap to Google Search Console', 'yellow');
    log('4. Monitor for successful processing', 'yellow');

  } catch (error) {
    log(`❌ Configuration failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run the script
main();

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the HTML file from dist
const htmlPath = path.join(__dirname, '../dist/index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace CSS references with minified versions
html = html.replace(/href="css\/style\.css"/g, 'href="css/style.min.css"');
html = html.replace(/href="css\/carousel\.css"/g, 'href="css/carousel.min.css"');
html = html.replace(/href="css\/animations\.css"/g, 'href="css/animations.min.css"');

// Replace JS references with minified versions
html = html.replace(/src="js\/script\.js"/g, 'src="js/script.min.js"');
html = html.replace(/src="js\/carousel\.js"/g, 'src="js/carousel.min.js"');

// Write the updated HTML back
fs.writeFileSync(htmlPath, html, 'utf8');

console.log('✓ HTML references updated to use minified files');

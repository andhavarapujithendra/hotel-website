const fs = require('fs');
const path = require('path');

// Function to update references in an HTML file
function updateHtmlRefs(filename) {
    const htmlPath = path.join(__dirname, '../dist', filename);
    let html = fs.readFileSync(htmlPath, 'utf8');

    // Replace CSS references with minified versions
    html = html.replace(/href="css\/style\.css"/g, 'href="css/style.min.css"');
    html = html.replace(/href="css\/carousel\.css"/g, 'href="css/carousel.min.css"');
    html = html.replace(/href="css\/animations\.css"/g, 'href="css/animations.min.css"');
    html = html.replace(/href="css\/menu\.css"/g, 'href="css/menu.min.css"');

    // Replace JS references with minified versions
    html = html.replace(/src="js\/script\.js"/g, 'src="js/script.min.js"');
    html = html.replace(/src="js\/carousel\.js"/g, 'src="js/carousel.min.js"');
    html = html.replace(/src="js\/menu\.js"/g, 'src="js/menu.min.js"');

    // Write the updated HTML back
    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log(`✓ ${filename} references updated to use minified files`);
}

// Process all HTML files
updateHtmlRefs('index.html');
updateHtmlRefs('menu.html');

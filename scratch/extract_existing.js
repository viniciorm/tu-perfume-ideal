const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Strip TypeScript imports and type annotations
content = content.replace(/import\s+.*?;/g, '');
content = content.replace(/export\s+const\s+products:\s+Product\[\]\s*=\s*/, 'const products = ');

// Append module.exports at the end
content += '\nmodule.exports = products;';

// Evaluate and get the products array
try {
  const products = eval(content);
  fs.writeFileSync(
    path.join(__dirname, 'existing_products.json'),
    JSON.stringify(products, null, 2),
    'utf8'
  );
  console.log(`Successfully extracted ${products.length} existing products.`);
} catch (err) {
  console.error("Error evaluating products file:", err);
  process.exit(1);
}

const fs = require('fs');
const path = require('path');

const api = process.env.API_URL || process.env.VERCEL_ENV_API_URL || 'http://3.0.93.123:8080/api';
const outPath = path.join(__dirname, 'src', 'environments', 'environment.prod.ts');

const content = `export const environment = {
  production: true,
  apiUrl: "${api}"
};
`;

fs.writeFileSync(outPath, content, { encoding: 'utf8' });
console.log('Wrote', outPath, '->', api);

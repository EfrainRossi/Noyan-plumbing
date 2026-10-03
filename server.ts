import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);
const distPath = path.resolve(__dirname, 'dist');
const publicPath = path.resolve(__dirname, 'public');

// Ensure production dist build exists
if (!fs.existsSync(path.join(distPath, 'index.html'))) {
  console.log('Compiled bundle not found in dist. Executing vite build...');
  try {
    execSync('npx vite build', { stdio: 'inherit' });
  } catch (err) {
    console.error('Automatic build attempt failed:', err);
  }
}

// Serve compiled static assets
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

// Serve public directory assets as fallback
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath));
}

// SPA fallback to compiled index.html
app.get('*', (_req, res) => {
  const targetHtml = path.join(distPath, 'index.html');
  if (fs.existsSync(targetHtml)) {
    res.sendFile(targetHtml);
  } else {
    res.status(500).send('Production build not ready. Please run npm run build.');
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Production server listening on http://0.0.0.0:${port}`);
});

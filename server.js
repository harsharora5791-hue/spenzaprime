console.log('--- SERVER STARTING ---');
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Current directory:', __dirname);
console.log('Checking for dist folder...');

if (fs.existsSync(path.join(__dirname, 'dist'))) {
  console.log('✅ dist folder found');
} else {
  console.log('❌ dist folder NOT found at', path.join(__dirname, 'dist'));
}

try {
  const app = express();
  const PORT = process.env.PORT || 5000;

  console.log('Setting up static middleware...');
  app.use(express.static(path.join(__dirname, 'dist')));

  console.log('Setting up catch-all route...');
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

  console.log(`Attempting to listen on port ${PORT}...`);
  app.listen(PORT, () => {
    console.log(`🚀 Server is successfully running on port ${PORT}`);
  }).on('error', (err) => {
    console.error('❌ Server failed to start:', err);
  });
} catch (error) {
  console.error('🔥 Fatal error during server setup:', error);
}

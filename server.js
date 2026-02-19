const express = require('express');
const cors = require('cors');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Activer CORS
app.use(cors());

// Servir les fichiers statiques (vos HTML, CSS, etc.)
app.use(express.static(path.join(__dirname)));

// Proxy pour l'API MangaDex
app.use('/api/mangadex', createProxyMiddleware({
    target: 'https://api.mangadex.org',
    changeOrigin: true,
    pathRewrite: {
        '^/api/mangadex': '',
    },
    onProxyReq: (proxyReq, req, res) => {
        console.log('Proxying:', req.url);
    }
}));

app.listen(PORT, () => {
    console.log('✅ Serveur démarré avec succès !');
    console.log(`📁 Dossier du projet: ${__dirname}`);
    console.log(`🌐 Accédez à votre site: http://localhost:${PORT}/index.html`);
    console.log(`🔍 Page de recherche: http://localhost:${PORT}/recherche.html`);
});
const express = require('express');
const app = express();

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

app.use(requireHTTPS);
app.use(express.static(`./dist/tier`));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/tier/'}
  );
});
const port = process.env.PORT ?? 4200
app.listen(port, () => console.log('listening', port))
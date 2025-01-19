const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Contoh Client-Server</title>
            </head>
            <body>
                <h1>Halo, ini halaman dari server!</h1>
                <p>Selamat datang di website kami.</p>
            </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
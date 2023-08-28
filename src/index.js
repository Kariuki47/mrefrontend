const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(port, "0.0.0.0", (err) => {
            if (err) throw err;
            console.log(`> Ready on http://0.0.0.0:${port}`);
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
// server.js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send(`
        <html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Node.js server.</p>
            </body>
        </html>
    `);
});

app.get('/about', (req, res) => {
    return res.send(`
        <html>
            <p><strong>About us: </strong>at CADT, we love node.js!</p>
        </html>
    `);
});

app.get('/contact-us', (req, res) => {
    return res.send(`
        <html>
            <h1>You can reach us via email...</h1>
        </html>
    `);
});

app.get('/products', (req, res) => {
    return res.send(`
        <html>
            <p>Buy <strong>one</strong> get <strong>one!</strong></p>
        </html>
    `);
});

app.get('/projects', (req, res) => {
    return res.send(`
        <html>
            <h1>Here are our awesome projects</h1>
        </html>
    `);
});

app.use((req, res) => {
    return res.status(404).send(`
        <html>
            <h1>404 Not Found</h1>
        </html>
    `);
});


app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});


// server.js
import fs from 'node:fs'
import exress from 'express';

const app = exress();

app.get('/', (req, res) => {
    return res.send(`
        Welcome to the Home Page
    `);
});

app.get('/contact', (req, res) => {
    return res.send(`
        <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/contact', (req, res) => {
    let body = "";
    req.on('data', chunk => {
        body += chunk.toString()
    });
    
    req.on('end', () => {
        fs.appendFileSync('./submissions.txt', `${body.split('=')[1]}\n`);
        return res.end(`{success: true}`);
    });
});

app.use((req, res) => {
    return res.status(404).send(`
        <h1>404 Not Found</h1>
    `);
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
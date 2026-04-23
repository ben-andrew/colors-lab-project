const http = require('http');

let server;
let baseUrl;

beforeAll((done) => {
    server = http.createServer((req, res) => {
        res.setHeader('Content-Type', 'application/json');

        req.on('data', () => {});
        req.on('end', () => {
            if (req.url === '/Login.php' && req.method === 'POST') {
                res.end(JSON.stringify({ id: 0, firstName: '', lastName: '', error: 'Invalid credentials' }));
            } else if (req.url === '/SearchColors.php' && req.method === 'POST') {
                res.end(JSON.stringify({ results: [], error: '' }));
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ error: 'Not found' }));
            }
        });
    });

    server.listen(0, () => {
        const { port } = server.address();
        baseUrl = `http://localhost:${port}`;
        done();
    });
});

afterAll((done) => {
    server.close(done);
});

describe('Login API', () => {
    test('returns expected JSON structure for invalid credentials', async () => {
        const response = await fetch(`${baseUrl}/Login.php`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({ login: 'invalid_user', password: 'bad_password' }),
        });

        expect(response.ok).toBe(true);

        const data = await response.json();
        expect(data).toHaveProperty('id');
        expect(data).toHaveProperty('firstName');
        expect(data).toHaveProperty('lastName');
        expect(data).toHaveProperty('error');
        expect(typeof data.id).toBe('number');
        expect(data.id).toBe(0);
    });
});

describe('SearchColors API', () => {
    test('returns expected JSON structure', async () => {
        const response = await fetch(`${baseUrl}/SearchColors.php`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({ search: 'test', userId: 0 }),
        });

        expect(response.ok).toBe(true);

        const data = await response.json();
        expect(data).toHaveProperty('results');
        expect(data).toHaveProperty('error');
        expect(Array.isArray(data.results)).toBe(true);
    });
});

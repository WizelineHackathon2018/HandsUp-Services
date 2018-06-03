const request = require('request');

describe('user', function() {

    test('signup', function(done) {
        const requestData = {
            name: 'test',
            username: 'test',
            password: 'test',
            skills: ['JS', 'CSS', 'VUEJS'],
            role: 'Front End',
            tasks: [
                {
                    title: 'Test title',
                    description: 'Test description',
                    tags: ['JS', 'VUEJS', 'AUTH0'],
                    comments: [],
                    hand: false
                }
            ]
        };

        const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/user/signup',
            json: true,
            body: requestData
        };

        request(options, function(err, res, body) {
            const jsonBody = typeof body === 'string' 
                ? JSON.parse(body)
                : {...body};

            expect(res.statusCode).toBe(200);
            expect(jsonBody).toHaveProperty('status', 'success');
            done();
        });
    });

    test('login', function(done) {
        const requestData = {
            username: 'test',
            password: 'test'
        };

        const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/user/login',
            json: true,
            body: requestData
        };

        request(options, function(err, res, body) {
            const jsonBody = typeof body === 'string' 
                ? JSON.parse(body)
                : {...body};

            expect(res.statusCode).toBe(200);
            expect(jsonBody).toHaveProperty('status', 'success');
            done();
        });
    });
});

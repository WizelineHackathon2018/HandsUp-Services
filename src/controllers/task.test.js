const request = require('request');

describe('task', function() {

    test('add task', function(done) {
        const requestData = {
            username: 'test',
            task: {
                title: 'Test Task Beta',
                description: 'Test Task Beta Description',
                tags: ['JS', 'ALX', 'GOLANG'],
                comments: [],
                hand: false,
                categorized: false
            }
        };

        const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/task/add',
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

    test('list tasks', function(done) {
        const requestData = {
            username: 'test'
        };

        const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/task/',
            json: true,
            body: requestData
        };

        request(options, function(err, res, body) {
            const jsonBody = typeof body === 'string' 
                ? JSON.parse(body)
                : {...body};

            expect(res.statusCode).toBe(200);
            expect(jsonBody).toHaveProperty('status', 'success');
            expect(jsonBody).toHaveProperty('data');
            done();
        });
    });

    test('add comment to task', function(done) {
        const requestData = {
            username: 'test',
            _id: '5b133e5853f4f6165ff9f026',
            comment: 'Test comment'
        };

        const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/task/comment',
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

    test('mark task as categorized', function(done) {
        const requestData = {
            username: 'test',
            _id: '5b133e5853f4f6165ff9f026'
        };

        const options = {
            method: 'PATCH',
            url: 'http://localhost:3000/api/task/categorized',
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

    test('set task handssup', function(done) {
        const requestData = {
            username: 'test',
            _id: '5b133e5853f4f6165ff9f026',
            up: true
        };

        const options = {
            method: 'PATCH',
            url: 'http://localhost:3000/api/task/handsup',
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

import users from "./users";
import request from 'supertest';
import response from 'supertest';
import app from '../../server';

describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/').expect(200);
    });

    test('It should response the GET method', () => {
        return response(app).get('/').expect(200,{ 'Hello World!': 'Test' });
    });
    
})
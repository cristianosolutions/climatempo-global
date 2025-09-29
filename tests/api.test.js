// tests/api.test.js
const request = require('supertest');
const nock = require('nock');
const app = require('../src/server');

describe('Clima Terminal API', () => {
  afterAll(() => {
    nock.restore();
    nock.cleanAll();
  });

  test('GET /health => 200 {status: "ok"}', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  test('GET /weather?city=Fortaleza => 200 e campos esperados', async () => {
    const mockResponse = {
      coord: { lon: -38.5247, lat: -3.7275 },
      weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' }],
      main: { temp: 26.3, feels_like: 26.1, humidity: 78 },
      wind: { speed: 5.66, deg: 140 },
      sys: { country: 'BR' },
      name: 'Fortaleza',
      cod: 200
    };

    nock('https://api.openweathermap.org')
      .get(/\/data\/2.5\/weather/)
      .query(true) // aceita qualquer querystring
      .reply(200, mockResponse);

    const res = await request(app).get('/weather?city=Fortaleza');

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('city', 'Fortaleza');
    expect(res.body).toHaveProperty('country', 'BR');
    expect(res.body).toHaveProperty('temp_celsius');
    expect(typeof res.body.temp_celsius).toBe('number');
    expect(res.body).toHaveProperty('description');
    expect(res.body).toHaveProperty('humidity');
    expect(res.body).toHaveProperty('wind_m_s');
  });

  test('GET /weather sem query city => 400', async () => {
    const res = await request(app).get('/weather');
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});

// src/server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.OWM_API_KEY;

console.log('API_KEY carregada?', API_KEY ? 'SIM' : 'NÃO');

if (!API_KEY) {
  console.warn('AVISO: variável OWM_API_KEY não definida. Para testes com nock isso é OK.');
  // Não dar exit para permitir execução de testes que mockam as requisições.
}

app.get('/health', (req, res) => res.json({ status: 'ok' }));

// GET /weather?city=NomeDaCidade
app.get('/weather', async (req, res) => {
  const city = (req.query.city || '').trim();
  if (!city) return res.status(400).json({ error: 'query param city é obrigatório' });

  const url = 'https://api.openweathermap.org/data/2.5/weather';

  try {
    const resp = await axios.get(url, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        lang: 'pt_br'
      },
      timeout: 7000
    });

    const d = resp.data;
    const output = {
      city: d.name,
      country: d.sys?.country || '',
      temp_celsius: Math.round(d.main?.temp),
      temp_feels_like_celsius: Math.round(d.main?.feels_like || 0),
      description: d.weather?.[0]?.description || '',
      icon: d.weather?.[0]?.icon ? `https://openweathermap.org/img/wn/${d.weather[0].icon}.png` : null,
      humidity: d.main?.humidity,
      wind_m_s: d.wind?.speed,
      wind_km_h: d.wind?.speed ? +(d.wind.speed * 3.6).toFixed(1) : null,
      raw: d // opcional: dados brutos do OpenWeather
    };

    return res.json(output);
  } catch (err) {
    if (err.response) {
      if (err.response.status === 404) return res.status(404).json({ error: 'Cidade não encontrada' });
      return res.status(err.response.status).json({ error: err.response.data || 'Erro do OpenWeather' });
    }
    console.error('Erro ao consultar OpenWeather:', err.message);
    return res.status(500).json({ error: 'Erro ao buscar dados do OpenWeather' });
  }
});

app.use((req, res) => res.status(404).json({ error: 'Rota não encontrada' }));

// Exporta o app para testes
module.exports = app;

// Inicia servidor apenas se executado diretamente (node src/server.js)
if (require.main === module) {
  app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
}

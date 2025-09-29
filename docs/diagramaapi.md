<h3>Diagrama e Estrutura</h3>

```marmeid

+-------------------+
|  Clima Terminal   |
|      API          |
+-------------------+
         |
         | GET /health
         |
         v
+-------------------+
| Resposta:          |
| { "status": "ok" } |
+-------------------+

         |
         | GET /weather?city=<nome-da-cidade>
         |
         v
+---------------------------------------------+
| Parâmetros:                                  |
| - city (obrigatório)                         |
+---------------------------------------------+
         |
         v
+---------------------------------------------+
| Consulta OpenWeatherMap API                 |
| Endpoint: /data/2.5/weather                 |
| Recebe: city, API_KEY, units=metric, lang=pt|
+---------------------------------------------+
         |
         v
+---------------------------------------------+
| Resposta (JSON):                             |
| {                                           |
|   "city": "Fortaleza",                       |
|   "country": "BR",                           |
|   "temp_celsius": 26,                        |
|   "temp_feels_like_celsius": 26,            |
|   "description": "algumas nuvens",          |
|   "icon": "url_do_icone",                    |
|   "humidity": 78,                            |
|   "wind_m_s": 5.66,                          |
|   "wind_km_h": 20.4,                         |
|   "raw": { ... }                             |
| }                                           |
+---------------------------------------------+
         |
         v
+-----------------------------+
| Possíveis Erros:            |
| 400 -> city obrigatório     |
| 404 -> cidade não encontrada|
| 500 -> erro interno         |
+-----------------------------+


clima-tempo-global/
├─ docs/               # Documentação
├─ src/                # Código-fonte do projeto
├─ postman/            # Coleção Postaman para realizar os testes
├─ .env
├─ .gitignore
├─ package-lock.json
├─ package.json
└─ README.md

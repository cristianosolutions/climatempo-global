### Diagrama de Arquitetura

```mermaid
flowchart TD
    A[Clima Terminal API] --> B[/GET /health/]
    B --> C[Resposta: {"status": "ok"}]

    A --> D[/GET /weather?city=<nome-da-cidade>/]
    D --> E[Parâmetros:\n- city (obrigatório)]
    E --> F[Consulta OpenWeatherMap API\nEndpoint: /data/2.5/weather\nRecebe: city, API_KEY, units=metric, lang=pt_br]
    F --> G[Resposta (JSON):\n{\n  "city": "Fortaleza",\n  "country": "BR",\n  "temp_celsius": 26,\n  "temp_feels_like_celsius": 26,\n  "description": "algumas nuvens",\n  "icon": "url_do_icone",\n  "humidity": 78,\n  "wind_m_s": 5.66,\n  "wind_km_h": 20.4,\n  "raw": { ... }\n}]
    G --> H[Possíveis Erros:\n400 -> city obrigatório\n404 -> cidade não encontrada\n500 -> erro interno]

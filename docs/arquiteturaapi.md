## Descrição Funcional da Solução

#### Requisitos funcionais
- RF01: A API deve retornar o status do servidor (`/health`).  
- RF02: A API deve consultar informações climáticas de uma cidade (`/weather`).  
- RF03: A API deve retornar os dados no formato JSON padronizado.  
- RF04: A API deve tratar erros (parâmetro ausente, cidade inexistente, erro do serviço externo).
  <br><br>

#### Requisitos não-funcionais
- RNF01: Utilizar Node.js e Express.  
- RNF02: Seguir protocolo **REST** para comunicação.  
- RNF03: A API deve ser documentada em **README.md** e com **coleção Postman**.  
- RNF04: Código deve estar versionado no GitHub.  
- RNF05: Respostas devem ser rápidas (latência < 1s em média).  

---

<br>

### Protocolos de integração
- **REST/HTTP** → comunicação entre cliente (curl/Postman) e a API.  
- **REST (OpenWeatherMap)** → integração da nossa API com o serviço externo.

---

## Design da AP

### Endpoints e Modelos de Dados

- ```GET /health```<br>
**Descrição**: Verifica se a API está rodando.<br>
 **Resposta (200)**:
```json
  {
  "status": "ok"
  }
```
<br> 

- ```GET /weather?city={nomeCidade}```<br>
 **Descrição**: Retorna o clima atual de uma cidade.<br>
 **Parâmetro obrigatório**:<br>
- ```city```: Nome da cidade (string).<br>
  **Resposta (200)**:
```json
{
  "city": "Fortaleza",
  "country": "BR",
  "temp_celsius": 26,
  "temp_feels_like_celsius": 26,
  "description": "algumas nuvens",
  "icon": "https://openweathermap.org/img/wn/02n.png",
  "humidity": 78,
  "wind_m_s": 5.66,
  "wind_km_h": 20.4
}
```
**Erros:**
- **400** → ```{"error": "query param city é obrigatório"}```<br>
- **404** → ```{"error": "Cidade não encontrada"}```<br>
- **500** → ```{"error": "Erro ao buscar dados do OpenWeather"}```<br>
---

### Rotas
- GET    ```/health```    Health check da API<br>
- GET    ```/weather?city=Fortaleza```    Retorna dados climáticos atuais<br>

---

### Testes de saúde
**Frameworks**
- **Jest** → testes unitários e integração.
- **Supertest** → simula requisições HTTP.
- **Nock** → mock de chamadas ao OpenWeatherMap.<br>

**Exemplo de testes existentes**<br>
✅ ```GET /health``` retorna ```{status: "ok"}```.<br>
✅ ```GET /weather?city=Fortaleza``` retorna campos esperados (mockado com Nock).<br>
✅ ```GET /weather``` sem ```city``` retorna 400.<br>





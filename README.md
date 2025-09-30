# 🌦️ Clima Tempo Global API


## Objetivo da API
Este projeto tem como objetivo desenvolver uma API RESTful como um componente central para um **sistema de monitoramento e alerta de condições meteorológicas nas cidades Brasileiras**. A solução visa integrar dados meteorológicos em tempo real para fornecer informações que possam ser consumidas por sistemas da Defesa Civil, aplicativos de notificação e painéis públicos.

A iniciativa está alinhada com o **ODS 11 (Cidades e Comunidades Sustentáveis)** da ONU, buscando tornar as cidades mais seguras, resilientes e sustentáveis, especialmente diante dos desafios impostos pelas mudanças climáticas e eventos de chuvas intensas.

---

## Descrição Funcional
A API desenvolvida atua como um *middleware*, integrando-se com a API externa do **[OpenWeatherMap API](https://openweathermap.org/api)**. Ela abstrai a complexidade da fonte de dados original e fornece endpoints simplificados com informações relevantes e traduzidas para o português.

Funcionalidades principais:
* Consulta de condições climáticas atuais para qualquer cidade.
* Retorno de dados essenciais como temperatura, sensação térmica, umidade e velocidade do vento (em km/h).
* Tratamento de erros robusto para garantir a disponibilidade e confiabilidade do serviço.


---

## Arquitetura da API e Diagrama

A arquitetura da solução é baseada em microsserviços, onde nossa API serve como um ponto de acesso único para os dados climáticos.

**Diagrama de Fluxo:**

```
[Cliente Final]      <-- (HTTP/JSON) --> [Nossa API (Node.js/Express)] <-- (HTTP/JSON) --> [API Externa (OpenWeatherMap)]

(Ex: App da Defesa Civil)
```

![Diagrama da Arquitetura](https://i.imgur.com/link_para_sua_imagem_do_diagrama.png)
*(**Ação:** Crie um diagrama simples usando uma ferramenta como draw.io, salve como imagem e faça upload em um site como o Imgur para gerar o link)*



## Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)<br> 
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)<br>
![Axios](https://img.shields.io/badge/Axios-6200EE?style=for-the-badge&logo=axios&logoColor=white)<br>
![Dotenv](https://img.shields.io/badge/dotenv-FAE042?style=for-the-badge&logo=dotenv&logoColor=black)<br>
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) <br>
![Terminal](https://img.shields.io/badge/Terminal-000000?style=for-the-badge&logo=gnome-terminal&logoColor=white)

---

## Como executar a API

**1. Clone o repositório ou baixar:**
```bash
  git clone https://github.com/cristianosolutions/climatempo-global.git 
```
**2. Entrar na pasta**
```bash
 cd climatempo-global
```

**3. Instalar dependências**
```bash
npm init -y
npm install axios dotenv
```
**4. Iniciar o servidor**
```bash
npm start
```
**5. Rodando os teste**
```bash
npm test
```
O Jest irá executar todos os testes e você deverá ver um resultado como ```3 passed```, ```3 total```, confirmando que sua API está robusta e confiável.

---

## Instruções de Consumir API [OpenWeatherMap API](https://openweathermap.org/api) via Postman

**1. Certifique-se de que o servidor Node.Js esteja rodando**
```bash
npm start
```
API rodando em ```http://localhost:3000```

<br>

**2. Utilize a coleção ```JSON``` abaixo para importar todas as rotas ```HTTP``` no ```POSTMAN```**:
<br>

   👉 [Aqui está a coleção pronta Json para copiar ou baixar](https://github.com/cristianosolutions/climatempo-global/blob/main/postman/colecao.json)

   **3. No ```Postman``` File -> Import -> Raw text e cole o JSON**.
   <br><br>
   Apos importar, voce terá uma coleção com duas requisições prontas para consumir.

   ---

   <br>
   

   ## Documentação da ```API```   
   
👉 [Clique aqui para visualizar a documentação da API:](https://github.com/cristianosolutions/climatempo-global/blob/main/docs/arquiteturaapi.md)

<br>

## Diagrama da ```API```
👉 [Clique aqui para visualizar o diagrama da API:](https://github.com/cristianosolutions/climatempo-global/blob/main/docs/diagramaapi.md)

<br><br>

---

<br>

 ## Responsabilidades da equipe no desenvolvimento da API

 ### Desenvolvimento código fonte e integração
  - **Cristiano Magno**
  - **Italo Bruno**
    <br>
 ### Instalação de dependências e testes Endpoint
  - **Amanda Freire**
  - **Davi Gaspar**
    <br>
### Organização de Documentação e Markdown no GitHub
  - **Raphaela Vidal**
  - **Antonia Samara**

---

<br><br>
  





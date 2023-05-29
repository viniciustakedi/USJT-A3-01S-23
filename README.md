# USJT-2023/1-A3

<br/>

## Integrantes do grupo

<br/>

|       Nome       |         RA        |
|------------------|------------------|
| Vinicius Takedi Souza Brunelli | 821147761 |
| Victor Oliveira Araújo | 821141079 |
| Giuliano Orlovas Cabianca | 821140777 |
| Pedro Aureliano de Oliveira Silva | 822159140 |
| Matheus de Oliveira Pereira | 821115715 |
| Maikon Reverson Melo Lima | 822158937 |

<br/>

## Projeto das UCs desenvolvimento web e sistema distribuidos/mobile

<br/>

### Essa aplicação utiliza [Turborepo](https://turbo.build/) para compilação do código, e [TypeScript](https://www.typescriptlang.org/) para desenvolvimento.

<br/>

## Apps and Packages

- `frontend`: Aplicação React desenvolvida com o framework [ViteJs](https://vitejs.dev/)
- `microservice`: Diretório dos microserviços (backend), utilizamos o framework [NestJs](https://nestjs.com/)
- `eslint-config-custom`: Confiurações padrões do EsLint para utilizarmos em todo o projeto
- `tsconfig`: Configurações padroes do tsconfig para utilizarmos em todo o projeto
- `api-client`: Consumo da API com axios

<br/>

## Scripts
- `npm run dev`: Inicia a aplicação em ambiente de desenvolvimento
  - frontend: http://localhost:3000/
  - microserviço de dados musicais: http://localhost:5000/
  - microserviço de usuario: http://localhost:5001/

- `npm run build`: Build da aplicação
- `npm run lint`: Serviço de lint na aplicação
- `npm run generate`: Gera a lib do Prisma ORM para cada microservice
- `npm run migrate`: Aplica as migrations no banco de dados

<br/>


## Passo-a-passo para rodar o projeto localmente
1. Caso for sua primeira vez na aplicação, instale as dependencias do projeto
    - `npm install`

2. Setar váriaveis de ambiente em cada microservice
    - `criar arquivo .env na raiz de cada microsserviço com a variavel DATABASE_URL`

3. Rode as migrations para atualizar o banco de dados local
    - `npm run migrate`

4. Gerar lib do Prisma ORM 
    - `npm run generate`

5. Por ultimo, inicie a aplicação
    - `npm run dev`


- A aplicação ira rodar no seu localhost
    - frontend: localhost:3000
    - microserviço1: localhost:5000
    - microserviço2: localhost:5001
    - ...


## Serviços externos utilizados
|       Serviço       |         Funcionalidade        |
|------------------|------------------|
| Railway | instancias PostgreSQL para cada microserviço |
| Upstash | Barramento de eventos com Kafka |


<br />

### Para adicionar pacotes à aplicação utilize o comando npm i "pacote" --workspace="nome-do-app"
### Leia a [documentação de pacotes](https://turbo.build/repo/docs/handbook/package-installation) do Turborepo para melhor aproveitamento.

<br />

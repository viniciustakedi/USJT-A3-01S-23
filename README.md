# USJT-2023/1-A3
## Projeto das UC desenvolvimento web e sistema distribuidos/mobile
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

<br/>

### Para adicionar pacotes à aplicação utilize o comando npm i "pacote" --workspace="nome-do-app"
### Leia a [documentação de pacotes](https://turbo.build/repo/docs/handbook/package-installation) do Turborepo para melhor aproveitamento.

<br />

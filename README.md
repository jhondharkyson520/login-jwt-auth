
# Express + JWT Authentication Backend

Este é um backend simples desenvolvido em **Node.js** utilizando **Express** e **JWT** para autenticação de usuários. O projeto segue a arquitetura **Clean Architecture** para facilitar a manutenção e escalabilidade.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
/src
  /config                - Contém configurações gerais do aplicativo.
  /controllers           - Controladores responsáveis pela lógica de requisições HTTP.
  /database              - Configuração do cliente Prisma e conexão com o banco de dados.
  /entities              - Definição das entidades principais do sistema.
  /middleware            - Middleware de autorização para rotas protegidas.
  /repositories          - Repositórios para interagir com o banco de dados (via Prisma).
  /routes                - Definição das rotas da aplicação.
  /use-cases             - Casos de uso que contêm a lógica de negócios.
  main.ts                - Arquivo principal que inicializa a aplicação Express.
```
## Instalação

Siga as etapas abaixo para instalar e executar o projeto localmente:

### Pré-requisitos

- Node.js
- PostgreSQL
- TypeScript

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/jhondharkyson520/login-jwt-auth.git
```

2. Instale as dependências:

```bash
cd login-jwt-auth
npm install
```

3. Crie e configure o banco de dados PostgreSQL.

4. Defina as variáveis de ambiente no arquivo `.env`:

```bash
DATABASE_URL="postgresql://<usuario>:<senha>@localhost:5432/<nome-do-banco>?schema=public"
JWT_SECRET="seu_segredo_super_secreto"
PORT=3000
```

### Rodando as Migrações do Prisma

Antes de rodar a aplicação pela primeira vez, execute as migrações do Prisma para configurar o banco de dados:

```bash
npx prisma migrate dev
```

### Rode a aplicação

Execute:

```bash
npm run dev
```

## Endpoints

Abaixo estão os principais endpoints da API.

### 1. **Registrar Usuário**

**POST** `/users/create`

Cria um novo usuário no sistema.

**Corpo da Requisição (JSON):**

```json
{
  "name": "Nome do Usuário",
  "email": "usuario@exemplo.com",
  "password": "senha_segura"
}
```

**Resposta (Sucesso):**

```json
{
  "sucess": "User created"
}
```

**Resposta (Erro):**

```json
{
  "error": "Internal Server Error"
}
```

### 2. **Login de Usuário**

**POST** `/users/login`

Autentica um usuário e retorna um JWT para ser utilizado em requisições protegidas.

**Corpo da Requisição (JSON):**

```json
{
  "email": "usuario@exemplo.com",
  "password": "senha_segura"
}
```

**Resposta (Sucesso):**

```json
{
  "sucess": "User authenticated",
  "user": {
    "id": "id_do_usuario",
    "name": "Nome do Usuário",
    "email": "usuario@exemplo.com"
  },
  "token": "jwt_token_aqui"
}
```

**Resposta (Erro):**

```json
{
  "error": "Invalid credentials"
}
```

### 3. **Rota Protegida - Hello World**

**GET** `/users/hello`

Este endpoint retorna um simples "Hello, World!" para usuários autenticados.

**Resposta (Sucesso):**

```json
{
  "message": "Hello, World!"
}
```

**Resposta (Erro):**

```json
{
  "error": "Unauthorized"
}
```

## Autenticação

A autenticação é realizada via JWT (JSON Web Token). Após o login, o usuário recebe um token que deve ser enviado em todas as requisições subsequentes nos cabeçalhos `Authorization` como `Bearer <token>`.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **Prisma ORM**
- **JWT (JSON Web Token)**

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para fazer um fork do repositório e enviar um pull request.

---

Se precisar de mais detalhes sobre o funcionamento do projeto, fique à vontade para perguntar!

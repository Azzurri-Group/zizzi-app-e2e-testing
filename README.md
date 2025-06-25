# microservice-template

A basic Node Koa app

## Setup

```shell
npm i
```

## Running

Build the project:

```shell
npm run build
```

Run the transpiled code:

```shell
npm start
```

Run the server, and watch for changes:

```shell
npm run start:dev
```

## Testing

Test the code:

```shell
npm test
```

Test the code, and watch for changes:

```shell
npm run test:watch
```

Test for code coverage:

```shell
npm run test:coverage
```

## Linting

Run the linter:

```shell
npm run lint
```

Run the linter, and fix the issues:

```shell
npm run lint
```

Format the code:

```shell
npm run format
```

## Configuration

### Adding a husky git hook

```shell
npx husky add .husky/pre-commit "npm test"
```

### Github workflow

> You will need to update the dev and prod files with the name of your project in docker and AWS. The placeholder has been set to `azzurri-project-dev` or in some places it has `azzurri-project-name`.
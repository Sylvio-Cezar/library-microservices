const options = {
    openapi: "3.0.0",
    language: "en-US",
    disableLogs: false,
    autoHeaders: true,
    autoQuery: true,
    autoBody: true,
};

const generateSwagger = require("swagger-autogen")(options);

const swaggerDocument = {
    info: {
        version: "1.0.0",
        title: "Livro API",
        description: "API para gerenciamento de Livros"
    },
    host: "localhost:3001",
    basePath: "/",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {},
    components: {
        schemas: {
            patchBookBody: {
                $available: false
            },
            bookBody: {
                $name: "O Senhor dos Anéis",
                $author: "J.R.R. Tolkien",
                $available: true
            }
        }
    }
};

const swaggerFile= "./docs/swagger.json";
const apiRouteFile= ["../src/index.js"];

generateSwagger(swaggerFile, apiRouteFile, swaggerDocument);
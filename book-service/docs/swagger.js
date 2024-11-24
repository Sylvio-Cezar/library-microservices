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
        title: "Usuário API",
        description: "API para gerenciamento de Usuários"
    },
    host: "localhost:3001",
    basePath: "/",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {},
    components: {
        schemas: {
            Book: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        description: "ID do livro",
                        example: 1
                    },
                    name: {
                        type: "string",
                        description: "Nome do livro",
                        example: "O Senhor dos Anéis"
                    },
                    author: {
                        type: "string",
                        description: "Nome do autor",
                        example: "J.R.R. Tolkien"
                    },
                    available: {
                        type: "boolean",
                        description: "Disponibilidade do livro",
                        example: true
                    }
                }
            }
        }
    }
};

const swaggerFile= "./docs/swagger.json";
const apiRouteFile= ["../src/index.js"];

generateSwagger(swaggerFile, apiRouteFile, swaggerDocument);
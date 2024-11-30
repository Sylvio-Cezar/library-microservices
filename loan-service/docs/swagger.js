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
        title: "Empréstimo API",
        description: "API para gerenciamento de Empréstimos"
    },
    host: "localhost:3002",
    basePath: "/",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {},
    definitions: {},
    components: {
        schemas: {
            loanBody: {
                $user_id: 1,
                $book_id: 1,
                $loan_date: "2024-12-02"
            }
        }
    }
};

const swaggerFile= "./docs/swagger.json";
const apiRouteFile= ["../src/index.js"];

generateSwagger(swaggerFile, apiRouteFile, swaggerDocument);
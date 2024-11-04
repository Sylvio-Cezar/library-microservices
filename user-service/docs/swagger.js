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
    host: "localhost:3000",
    basePath: "/",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {},
    definitions: {},
    components: {
        schemas: {
            userBody: {
                $name: "Usuario Teste",
                $email: "teste@teste.com",
                $cpf: "11122233344",
                $birthdate: "2000-01-01"
            }
        }
    }
};

const swaggerFile= "./docs/swagger.json";
const apiRouteFile= ["../src/index.js"];

generateSwagger(swaggerFile, apiRouteFile, swaggerDocument);
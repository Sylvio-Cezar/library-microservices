# Instalação

- Clone o repositório
    ```cmd
    git clone https://github.com/Sylvio-Cezar/library-microservices/tree/RotaGetUserID
    ```

- Navegue até o diretório
    ```cmd
    cd library-microservices
    ```

## Serviço de Usuários

### Inicialização

- Navegue até o diretório
    ```cmd
    cd user-service
    ```

- Instale as dependências 
    ```cmd
    npm install
    ```

- Crie o banco de dados (sequelize-cli já incluso como dependência de desenvolvimento)
    ```cmd
    npx sequelize-cli db:migrate
    ```

### Execução

- Inicie o servidor (configurado com o nodemon) 
    ```cmd
    npm run dev
    ```
A mensagem 'Servidor inicializado' será exibida no console indicando sucesso na execução

A aplicação estará disponível com URL base: `http://localhost:3000/`

### Documentação

Após inicializado o servidor acesse a rota `/docs` para ver a documentação (construida com Swagger)

É possível verificar os parâmetros e exemplos de requisições por lá, além da possibilidade de testar os endpoints
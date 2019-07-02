# ml-test

### SETUP

`npm i`

`npm start`

### TESTS

`npm run test`

## Unit Tests

`npm run test:unit`

## HTTP integration tests

`npm run test:integration`

## Check the test coverage

`npm run coverage`

# API - extra features

> Swagger
Here is some documentation created by Swagger.

Go ahead, test it! `http://localhost:7000/docs`

> Error handler

Error handler using the correct RESTFUL responses

> validators(input)

Joi + error handler === correct status codes :D

> HEALTH endpoint

Check the status of the api using the endpoint `/health` -> `http://localhost:7000/health`

> Minimal SECURITY

For that reason I used [helmet](https://github.com/helmetjs/helmet)
in this test.

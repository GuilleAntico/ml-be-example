module.exports = {
  port: process.env.PORT || 7000,
  mlAPI: {
    baseURL: 'https://api.mercadolibre.com',
    defaultAuthor: {
      name: 'Guillermo',
      lastName: 'Antico'
    },
    testLimits: {
      totalItemsBySearch: 10
    }
  },
  swagger: {
    users: {
      ml: 'guilletest'
    },
    options: {
      swaggerDefinition: {
        info: {
          title: 'ML gateway test',
          version: '1.0.0',
          description: 'This is a minimal API gateway of ML'
        },
        basePath: '/'
      },
      apis: [
        './swagger.yaml', // static swagger YAML
        '**/*Router*.js' // dynamic router documentation
      ]
    }
  }
};

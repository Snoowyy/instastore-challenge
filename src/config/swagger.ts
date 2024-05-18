import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'instastore',
      version: '1.0.0',
      description: 'InstaStore is a microservice in charge of selecting the closest "convenience" store to deliver a groceries order to our B2B clients.',
    },
    securityDefinitions: {
      Bearer: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
    components: {
      securitySchemes: {
        Bearer: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts'], // Ruta a los archivos de rutas y modelos
};

export const swaggerSpec = swaggerJSDoc(options);

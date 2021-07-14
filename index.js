const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Sample API',
      description: 'Setup purposes only',
      contact: {
        name: 'Test Developer',
      },
      servers: ['http://localhost:8080'],
    },
  },
  apis: ['index.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /customers:
 *    get:
 *      description: Use to request all customers
 *      responses:
 *        '200':
 *           description: A successfull response
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./core/routes/bank.route')(app);

app.listen(8080, () => {
  console.log(`Listening at http://localhost:${8080}`);
});

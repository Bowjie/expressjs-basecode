const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('./core/extras/swagger.json');

const swaggerDocs = swaggerJsDoc(swaggerJson);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./core/routes/bank.route')(app);

app.listen(8080, () => {
  console.log(`Listening at http://localhost:${8080}`);
});

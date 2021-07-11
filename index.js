const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('<h2>Welcome to express js</h2>');
});

require('./core/routes/bank.route')(app);

app.listen(8080, () => {
  console.log(`Listening at http://localhost:${8080}`);
});

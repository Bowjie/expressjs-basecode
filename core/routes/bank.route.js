module.exports = (app) => {
  const bank = require('../controllers/bank.controller');

  app.post('/bank/add', bank.create);
  app.put('/bank/:id/update', bank.create);
  app.delete('/bank/:id/delete', bank.create);
  app.get('/bank/get/:id', bank.create);
};

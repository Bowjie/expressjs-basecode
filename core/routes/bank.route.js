module.exports = (app) => {
  const bank = require('../controllers/bank.controller');

  app.post('/bank/add', bank.add);
  app.put('/bank/:id/update', bank.add);
  app.delete('/bank/:id/delete', bank.add);
  app.get('/bank/get/:id', bank.add);
};

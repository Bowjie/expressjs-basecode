const { v1 } = require('../config/shared.config');

module.exports = (app) => {
  const bank = require('../controllers/bank.controller');

  app.post(`/${v1}/bank/add`, bank.add);
  app.put(`/${v1}/bank/:id/update`, bank.update);
  app.delete(`/${v1}/bank/:id/delete`, bank.delete);
  app.get(`/${v1}/bank/get/:id`, bank.get);
};

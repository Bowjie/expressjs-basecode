module.exports.ObjectEmptyChecker = (body) => {
  const PROMISE = new Promise((resolve) => {
    if (JSON.stringify(body) === '{}') {
      resolve('error');
    } else {
      const NEW_ARR = [];
      const KEYS = Object.keys(body);
      for (const key in body) {
        NEW_ARR.push(body[key]);
        if (body[key] == undefined) {
          resolve('error');
          break;
        }

        if (KEYS.length === NEW_ARR.length) {
          resolve('success');
        }
      }
    }
  });

  return PROMISE;
};

const { reject } = require('lodash');

const getRequestBody = request => {
  return new Promise((resolve, reject) => {
    let body = []; // array kosong untuk menyimpan body

    request.on('data', chunk => {
      body.push(chunk); // menyimpan ke string kosong
    });

    request.on('end', () => {
      resolve(Buffer.concat(body).toString()); // convert ke string
    });

    request.on('err', err => {
      reject(err);
    });
  });
};

module.exports = getRequestBody;

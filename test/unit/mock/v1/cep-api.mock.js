const { cep } = require('./json/cep-api.json.js');

module.exports = function load(nock) {
  nock('http://correiosapi.apphb.com')
    .get('/cep/04823391')
    .times(1)
    .reply(200, cep);
};

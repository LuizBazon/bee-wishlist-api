const request = require('request-promise').defaults({
  json: true,
});
const BaseRepository = require('../../../../core/BaseRepository.js');
const { throwMissingParameter } = require('../../../../util');

module.exports = class CepApiRepository extends BaseRepository {
  constructor(baseUrl) {
    super();

    const { url = throwMissingParameter('baseUrl') } = { url: baseUrl };

    this.baseUrl = url;
  }

  getByCep(cep) {
    return request.get(`${this.baseUrl}/cep/${cep}`);
  }
};

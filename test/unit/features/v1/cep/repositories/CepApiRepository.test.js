const nock = require('nock');
const expect = require('expect.js');
const { CepApiRepository } = require('../../../../../../src/features/v1/cep/repositories');
const mock = require('../../../../mock/v1/json/cep-api.json.js');
require('../../../../mock/v1/cep-api.mock')(nock);

describe('CepApiRepository', function () {
  beforeEach(function () {
    this.cep = mock.cep;
    this.repository = new CepApiRepository('http://correiosapi.apphb.com');
  });

  it('Should get by cep', function () {
    return this.repository.getByCep('04823391')
      .then((cep) => { expect(cep).to.eql(this.cep); });
  });

  it('Should throw exception when not given an url to CepApiRepository', function () {
    expect(() => new CepApiRepository()).to.throwException(/Missing baseUrl parameter/);
  });
});

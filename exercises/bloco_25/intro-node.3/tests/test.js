const { expect } = require('chai');

const { funcaoNumber, funcaoEscreve } = require('../index.js');

describe('Verifica a função funcaoNumber', () => {
  describe('Quando a entrada for menor que 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = funcaoNumber(-1);

        expect(resposta).to.be.a('string');
      });
      it('é igual a "negativo"', () => {
        const resposta = funcaoNumber(-1);

        expect(resposta).to.be.equals('negativo');
      });
    })
  })
  describe('Quando a entrada for igual a 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = funcaoNumber(-1);

        expect(resposta).to.be.a('string');
      });
      it('é igual a "neutro"', () => {
        const resposta = funcaoNumber(0);

        expect(resposta).to.be.equals('neutro');
      });
    })
  })
  describe('Quando a entrada for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = funcaoNumber(1);

        expect(resposta).to.be.a('string');
      });
      it('é igual a "positivo"', () => {
        const resposta = funcaoNumber(1);

        expect(resposta).to.be.equals('positivo');
      });
    })
  })
  describe('Quando a entrada não for um número', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = funcaoNumber('a');

        expect(resposta).to.be.a('string');
      });
      it('é igual a "o valor deve ser um número"', () => {
        const resposta = funcaoNumber('a');

        expect(resposta).to.be.equals('o valor deve ser um número');
      });
    })
  })
});

const sinon = require('sinon');
const { promises } = require('fs');

describe('Verifica a função funcaoEscreve', () => {
  before(() => {
    sinon.stub(promises, 'writeFile');
  });

  after(() => {
    promises.writeFile.restore();
  });

  describe('a resposta', () => {
    it('é uma string', async () => {
      const resposta = await funcaoEscreve('arquivo.txt', 'A trybe é demais!!!');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', async () => {
      const resposta = await funcaoEscreve('arquivo.txt', 'A trybe é demais!!!');

      expect(resposta).to.be.equals('ok');
    });
  })
});

const sinon = require('sinon');
const { expect } = require('chai');

const MovieModel = require('../../models/movieModel');
const MovieService = require('../../services/movieService');

describe('Busca todos os filmes no BD', () => {
  describe('quando não existe nenhum filme criado', () => {
    before(() => {
      sinon.stub(MovieModel, 'getAll')
        .resolves([]);
    });

    after(() => {
      MovieModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const response = await MovieService.getAll();

      expect(response).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const response = await MovieService.getAll();

      expect(response).to.be.empty;
    });

  });

  describe('quando existem filmes criados', () => {
    before(() => {
      sinon.stub(MovieModel, 'getAll')
        .resolves([
          {
            id: '604cb554311d68f491ba5781',
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        ]);
    });

    after(() => {
      MovieModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const response = await MovieService.getAll();

      expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const response = await MovieService.getAll();

      expect(response).to.be.not.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [ item ] = await MovieService.getAll();

      expect(item).to.be.an('object');
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [ item ] = await MovieService.getAll();

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });

  });
});

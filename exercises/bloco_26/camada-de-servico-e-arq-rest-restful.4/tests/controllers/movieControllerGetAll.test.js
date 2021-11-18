const sinon = require('sinon');
const { expect } = require('chai')

const MovieController = require('../../controllers/movieController');
const MovieServices = require('../../services/movieService');
const { request, response } = require('express');

describe('Ao chamar o controller de getAll', () => {
  describe('quando não existem filmes no banco de dados', async () => {
    const request = {};
    const response = {};
    
    before(async () => {
      request.body = {};    
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      
      sinon.stub(MovieServices, 'getAll').resolves([]);
    });
    
    after(() => {
      MovieServices.getAll.restore();
    });
    
    it('é chamado o método "status" passando o código 200', async () => {
      await MovieController.getAll(request, response);
      
      expect(response.status.calledWith(200)).to.be.equal(true);
      
    });
    
    it('é chamado o método "json" passando uma array', async () => {
      await MovieController.getAll(request, response);
      
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
    
    it('é chamado o método "json" passando uma array vazia', async () => {
      await MovieController.getAll(request, response);
      
      expect(response.json.calledWith([])).to.be.equal(true);
    });
  });
  
  describe('quando existem filmes no banco de dados', () => {
    const request = {};
    const response = {};
    const movies = [
      {
        id: '604cb554311d68f491ba5781',
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      }
    ];
    
    before(() => {
      request.body = {};
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      
      sinon.stub(MovieServices, 'getAll').resolves(movies);
    });
    
    after(() => {
      MovieServices.getAll.restore();
    });
    
    it('é chamado o método "status" passando o código 200', async () => {
      await MovieController.getAll(request, response);
      
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    
    it('é chamado o método "json" passando uma array', async () => {
      await MovieController.getAll(request, response);
      
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
    
    it('é chamado o método "json" com a lista de filmes', async () => {
      await MovieController.getAll(request, response);
      
      expect(response.json.calledWith(movies)).to.be.equal(true);
    });
  });
})

const { it, expect } = require('@jest/globals');
const getRepos = require('./exercise4.js');

//Com promise
it('Testa se os repositorios estão na lista', () => {
  expect.assertions(2);
  return getRepos('https://api.github.com/orgs/tryber/repos').then((repos) => {
    expect(repos).toContain('sd-01-week4-5-project-todo-list');
    expect(repos).toContain('sd-01-week4-5-project-meme-generator');
  });
});

//Com async/await
it('Testa se os repositorios estão na lista', async () => {
  expect.assertions(2);
  const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
  expect(repos).toContain('sd-01-week4-5-project-todo-list');
  expect(repos).toContain('sd-01-week4-5-project-meme-generator');
});
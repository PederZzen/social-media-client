import { login } from '../../src/js/api/index';
import { logout } from '../../src/js/api/index';
import { createPost } from '../../src/js/api/index';
import { deletePost } from '../../src/js/api/index';

Cypress.Commands.add('login', async (email, password) => {
  await login(email, password);
});

Cypress.Commands.add('logout', () => {
  logout();
});

Cypress.Commands.add('createItem', async (title, body, media, tags) => {
  let item = await createPost(title, body, media, tags);
  return item;
});

Cypress.Commands.add('deletePost', (id) => {
  deletePost(id);
});

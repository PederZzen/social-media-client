import { email } from './user.js';
import { password } from './user.js';
import { post } from './post.js';

describe('Create new item', () => {
  it('Tests if the create item function creates a new item on the API', () => {
    cy.visit('/');
    cy.login(email, password);
    cy.createItem(post.title, post.body, post.media, post.tags).then(
      (awesomePost) => {
        expect(awesomePost.id).to.not.be.undefined;
        cy.deletePost(awesomePost.id);
      }
    );
  });
});

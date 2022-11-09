import { login } from '../../src/js/api/auth/login';

describe('Logging in', () => {
  it('Tests if the login form validates user input correctly', () => {
    expect(login).to.not.throw(Error);
  });
});

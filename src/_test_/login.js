import { login } from '../js/api/auth/login';

test('Ecpect valid token', () => {
  expect(login.response.ok).toBe(200);
});

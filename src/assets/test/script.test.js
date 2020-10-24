import SetUserName from '../script/script';

const userName = new SetUserName();

describe('Should have a factory for setting users', () => {
  test('User object should be defined', () => {
    expect(userName).toBeDefined();
  });
  test('Should be able to create a user Object with a valid name', () => {
    const user = userName.User('Pato');

    expect(user.name).toBe('Pato');
  });

  test('Should have a score array to store\' s scores.', () => {
    const user = userName.User('Pato');

    expect(typeof user.score).toBe('object');
  });

  test('user object should have score property ', () => {
    const user = userName.User('Pato');
    expect(user.score).toEqual([]);
  });
});
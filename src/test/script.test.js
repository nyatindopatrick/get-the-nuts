import SetUserName from '../script/script';

const userName = new SetUserName();

describe('Username class should be existing', () => {
  test('User object should be defined', () => {
    expect(userName).toBeDefined();
  });
  test('User object with username should be created', () => {
    const user = userName.User('Pato');

    expect(user.name).toBe('Pato');
  });

  test("An array to store user's score should exist", () => {
    const user = userName.User('Pato');

    expect(typeof user.score).toBe('object');
  });

  test('user object should have score property ', () => {
    const user = userName.User('Pato');
    expect(user.score).toEqual([]);
  });
});

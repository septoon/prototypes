import Character from '../src/js/Сharacter';

test('demage equal 10', () => {
  const recieved = new Character('Лучник', 'Bowman');
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    health: 94,
    attack: 10,
    defence: 40,
  };
  recieved.damage(10);

  expect(recieved).toEqual(expected);
});

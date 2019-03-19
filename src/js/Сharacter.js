/**
 * <Функция-конструктор игрового персонажа>
 *
 * @param name - имя персонажа
 * @param type - тип персонажа
 *
 */
function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}
Character.prototype.damage = function damage(points) {
  const demageAmount = points * (1 - this.defence / 100);
  this.health = this.health - demageAmount;
  return this.health;
};

export default Character;

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  return parseInt((Math.random() * (maxDamage - minDamage)) + minDamage);
}

const warriorAttack = (warrior) => {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength * warrior.weaponDmg;
  return parseInt((Math.random() * (maxDamage - minDamage)) + minDamage);
}

const mageAttack = (mage) => {
  const minDamage = mage.intelligence;
  const maxDamage = mage.intelligence * 2;
  const mageDamage = parseInt((Math.random() * (maxDamage - minDamage)) + minDamage);
  const mageMana = mage.mana;
  if (mageMana < 15) {
    return {damage: 'Não possui mana suficiente', mana: 0};
  } else {
    return {damage: mageDamage, mana: 15};
  }
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior)
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageAttackTurn = mageAttack(mage);
    const mageDamage = mageAttackTurn.damage;
    mage.damage = mageDamage;
    mage.mana -= mageAttackTurn.mana;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    dragon.damage = dragonDamage;
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
  },
  turnStats: () => battleMembers, 
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnStats());
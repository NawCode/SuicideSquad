/**
 * Retourne la puissance d'attaque d'un héros
 */
const getHerosAttack = (hero) =>
  parseInt(hero.powerstats.intelligence ?? 1, 10) +
  parseInt(hero.powerstats.strength ?? 1, 10);

/**
 * Retourne la défense totale d'un héros
 */
const getHerosDefense = (hero) =>
  parseInt(hero.powerstats.power ?? 1, 10) +
  parseInt(hero.powerstats.combat ?? 1, 10);

/**
 * Retourne un nombre aléatoire entre min et max
 */
const getRandomValueBetween = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

/**
 * Lance un combat entre 2 héros. Retourne un objet contenant
 * une description de chaque round
 */
export function fight(hero1, hero2) {
  let attacker = JSON.parse(JSON.stringify(hero1));
  let defender = JSON.parse(JSON.stringify(hero2));

  attacker.powerstats.durability =
    parseInt(attacker.powerstats.durability, 10) * 15 +
    getRandomValueBetween(20, 200);
  attacker.attack = getHerosAttack(attacker);
  attacker.defense = getHerosDefense(attacker);

  defender.powerstats.durability =
    parseInt(defender.powerstats.durability, 10) * 15 +
    getRandomValueBetween(20, 200);
  defender.attack = getHerosAttack(defender);
  defender.defense = getHerosDefense(defender);

  const rounds = [];

  while (
    attacker.powerstats.durability > 0 &&
    defender.powerstats.durability > 0
  ) {
    const round = {
      attacker,
      defender,
      critical: false,
    };

    const attackPoints =
      getRandomValueBetween(1, attacker.attack / 4) *
      getRandomValueBetween(1, 6);
    const defensePoints = getRandomValueBetween(1, defender.defense / 4);
    let damageDone = attackPoints * 4 - defensePoints;

    // Coup critique !
    if (damageDone === attacker.attack) {
      round.critical = true;
      damageDone *= 2;
    }

    if (damageDone < 0) {
      damageDone = 0;
    }

    round.damageDone = damageDone;

    rounds.push(round);

    defender.powerstats.durability =
      parseInt(defender.powerstats.durability, 10) - damageDone;

    attacker = round.defender;
    defender = round.attacker;
  }

  return {
    rounds,
    winner: attacker.powerstats.durability <= 0 ? defender : attacker,
    loser: defender.powerstats.durability <= 0 ? attacker : defender,
  };
}

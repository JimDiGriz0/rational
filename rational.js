import getGcd from './utils.js';
import getGcd from './utils.js';

// BEGIN (write your solution here)

const makeRational = (numer, denum) => {
  const gcd = getGcd(numer, denum);
  return {
    numer: numer / gcd,
    denum: denum / gcd,
  };
};

console.log(makeRational(1, 2));

// END

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

// export { makeRational, getNumer, getDenom, add, sub, ratToString };

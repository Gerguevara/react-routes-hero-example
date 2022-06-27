import { heroes } from "../fakeData/heroes";


export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};

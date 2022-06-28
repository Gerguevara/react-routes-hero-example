import { useMemo } from "react";

import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {

  // se utiliza use memo porque solo es data de lectura y jamas va a cambiar
  // se escucha si el elemento publisher cambia
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
       <>
       <spam>{JSON.stringify(hero)}</spam>
       <br />
       </>
      ))}
    </div>
  );
};

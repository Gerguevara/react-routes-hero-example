import { useMemo } from "react";
import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
 
  // cuando se dispara un cambio en el state, este se vuelve a redibujar
  // por lo tanto es mejor usar use memo apra lo que el envuelva no afecte
  // este ejemplo no es viable pq getHroes es algo fijo pero para ejemploficar
  //es perfecto, si el id no cambia esta funcion no es necesaria volver a ser llamada
  // pero es util cuando un componente padre dispara un redibujado innecesario aqui
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row">
      {heroes.map((hero) => (
        // enviando el argumento con el spread es como mondarlo desestructurado
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

import { Link } from "react-router-dom";

//formas de crear un componente en el mismo archivo

// recibe el heroe desestructurado desde el padre
const CharactersByHero = ({ alter_ego, characters }) => {
  // if ( alter_ego === characters ) return (<></>);
  // return <p>{ characters }</p>
  return alter_ego === characters ? <></> : <p className="text-dark">{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  // const charactesByHero =  (<p>{ characters }</p>);

  return (
    <div className="col col-md-4 p-2 animate__animated animate__fadeIn">
      <div className="card bg-secondary">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title ">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {/* {
                ( alter_ego !== characters ) && characterByHero
                ( alter_ego !== characters ) && <p>{ characters }</p>
                } */}
                
              <CharactersByHero characters={characters} alter_ego={alter_ego} />

              <p className="card-text">
                <small>{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`} className="text-info">Más..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

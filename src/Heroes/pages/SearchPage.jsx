import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../common/";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

const SearchPage = () => {
  // toma el navigate de react router dom
  const navigate = useNavigate();
  //toma la url actual de la ruta en la que nos encontramos con este Hook
  const location = useLocation();
// parsea el string que es urel en secciones por ejemplo aca toma q
// pero podrian venir mas elementos, entonces aca de search?q= toma su value
// si el valor no viene el valor de q es '' por defecto
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  // el usuario no ha escrito nada 
  const showSearch = q.length === 0;
  // el usuario busco algo y no lo encontro
  const showError = q.length > 0 && heroes.length === 0;

  //use form para manejar el estado de el formulario se le paso el valor
  //q que toma de  los query params, para que asi al nomas entre la url el valor del input sea seteado
  // recordar toma el valor del name  del input con el cual se hace referencia
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // valida que tenga 2 o mas caracteres
    // if ( searchText.trim().length <= 1 ) return;

    //simula a una navegacion a estaa ruta, si no se le indica el sufijo
    // es como que navegue a esta misma mas lo que el texto de los templates literales
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
              ( q === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;

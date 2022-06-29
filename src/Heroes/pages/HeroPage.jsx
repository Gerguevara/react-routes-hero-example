import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

const HeroPage = () => {
  // toma de la ruta
  const { id } = useParams();
  // declara el hook de router dom
  const navigate = useNavigate();

  // cuando se dispara un cambio en el state, este se vuelve a redibujar
  // por lo tanto es mejor usar use memo apra lo que el envuelva no afecte
  // este ejemplo no es viable pq getHroes es algo fijo pero para ejemploficar
  //es perfecto, si el id no cambia esta funcion no es necesaria volver a ser llamada
  // pero es util cuando un componente padre dispara un redibujado innecesario aqui

  const hero = useMemo(() => getHeroById(id), [id]);

  // navigate menos back nos permite volver a la ruta anterior
  // manejar con cuidado porque puede sacar al usuario de nuestra app
  const onNavigateBack = () => {
    navigate(-1);
  };

  // se requiere que si el heroe no existe , el usuario sea redirigido otra  url
  // pero un functional component siempre debe devover un componente , por ello
  // se utiliza el <navigate> y no la funcion navigate de forma programatica para
  // redirigir

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush bg-dark">
          <li className="list-group-item bg-dark border-0">
            {" "}
            <b>Alter ego:</b> {hero.alter_ego}{" "}
          </li>
          <li className="list-group-item bg-dark border-0">
            {" "}
            <b>Publisher:</b> {hero.publisher}{" "}
          </li>
          <li className="list-group-item bg-dark border-0">
            {" "}
            <b>First appearance:</b> {hero.first_appearance}{" "}
          </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{hero.characters}</p>

        <button
          className="btn btn-outline-primary mt-5"
          onClick={onNavigateBack}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};

export default HeroPage;

import React from "react";
import { useNavigate } from "react-router-dom";

export const LogginPages = () => {

  const navigate = useNavigate();
//replace true es para evitar que se navegue a esta ruta de vuelta
// lo que hace es decirle que haga un reemplazo de esta ruta 
// no una navegacion como tal asi no puede ser accedita por el historia de back button
  const handleLogin = () => {
    navigate('/marvel', {replace: true});
  }

  return (
    <div className="container-fluid px-2">
      <h3>LogginPages</h3>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

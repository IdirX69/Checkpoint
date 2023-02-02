import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Contact Manager</h1>

      <p className="home-header">
        Bienvenue sur Contact Manager, votre solution ultime pour gérer vos
        contacts. Avec notre plateforme en ligne facile à utiliser, vous pouvez
        stocker, organiser et accéder à toutes vos informations de contact en un
        seul endroit. Nous vous offrons une interface intuitive et une
        technologie de pointe pour garantir la sécurité de vos données. Évitez
        les feuilles de calcul dispersées et les carnets d'adresses en désordre
        en utilisant Contact Manager pour centraliser et automatiser votre
        gestion de contacts. Essayez-le dès maintenant et découvrez la puissance
        de la gestion efficace des contacts.
      </p>

      <div className="button-home">
        <Link to="/login">
          <button type="button" className="button">
            Connexion
          </button>
        </Link>
        <Link to="register">
          <button type="button" className="button">
            S'inscrire
          </button>
        </Link>
      </div>
    </div>
  );
}

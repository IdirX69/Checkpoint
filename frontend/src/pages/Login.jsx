import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../../context/userContext";

function Login() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { setUser, setToken } = useCurrentUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    if (email && password) {
      // on appelle le back
      fetch(`${BACKEND_URL}/login`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setToken(result.token);
          setUser(result.user);

          navigate("/contacts");
        })
        .catch(console.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-login-form">
      <h2>Connexion</h2>

      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
      />

      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        id="password"
      />

      <button type="submit" className="button">
        Connexion
      </button>
      <NavLink to="/">
        <h5>Retour a l'acceuil</h5>
      </NavLink>
    </form>
  );
}

export default Login;

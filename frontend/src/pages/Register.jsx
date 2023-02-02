import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      name,
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    if (confirmPassword === password) {
      fetch(`${BACKEND_URL}/register`, requestOptions)
        .then(() => {
          navigate("/authentification");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <form onSubmit={handleForm} className="register-login-form">
      <h2>inscription</h2>
      <label htmlFor="name" className="form-label">
        Pseudo
      </label>
      <input onChange={(e) => setName(e.target.value)} type="name" id="name" />

      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
      />

      <label htmlFor="password" className="form-label">
        Mot de passe
      </label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        id="password"
      />

      <label htmlFor="password" className="form-label">
        Confiremer votre mot de passe
      </label>
      <input
        type="password"
        id="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <NavLink to="/">
        <button className="button" type="submit">
          Inscription
        </button>
      </NavLink>
      <NavLink to="/">
        <h5>Retour a l'acceuil</h5>
      </NavLink>
    </form>
  );
}

export default Register;

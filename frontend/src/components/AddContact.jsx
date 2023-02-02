/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../context/userContext";

function AddContact({ setContactsList }) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const { user } = useContext(CurrentUserContext);

  const [categoryList, setCategoryList] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [category_id, setCategory] = useState("");

  useEffect(() => {
    fetch(`${BACKEND_URL}/category`)
      .then((res) => res.json())
      .then((category) => {
        setCategoryList(category);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      name,
      email,
      phone_number,
      address,
      category_id,
      user_id: user.id,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch(`${BACKEND_URL}/contacts`, requestOptions)
      .then((res) => {
        if (res) {
          fetch(`${BACKEND_URL}/contacts`)
            .then((response) => response.json())
            .then((contactsList) => setContactsList(contactsList));
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="add-contact">
      <h2>Ajouter un contact</h2>
      <form action="submit">
        <label htmlFor="name" className="form-label">
          Nom
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="name"
          id="name"
        />

        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
        />

        <label htmlFor="phone_number" className="form-label">
          Tel
        </label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="phone_number"
          id="phone_number"
        />

        <label htmlFor="address" className="form-label">
          Adresse
        </label>
        <input
          type="address"
          id="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          id="category"
          required="required"
        >
          <option>Groupe</option>
          {categoryList.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <button className="button" type="submit" onClick={handleSubmit}>
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddContact;

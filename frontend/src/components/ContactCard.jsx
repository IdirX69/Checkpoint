/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import CurrentUserContext from "../../context/userContext";

function ContactCard({ contact, setContactsList }) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const { token } = useContext(CurrentUserContext);
  const [update, setUpdate] = useState(true);
  const [email, setEmail] = useState();
  const [phone_number, setPhone] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [category_id, setCategory] = useState("");
  const setter = () => {
    setName(contact.name);
    setEmail(contact.email);
    setAddress(contact.address);
    setPhone(contact.phone_number);
    setCategory(contact.category_id);
  };
  const body = JSON.stringify({
    name,
    email,
    phone_number,
    address,
    category_id,
  });

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");
  const deleteRequest = {
    method: "DELETE",
    headers: myHeaders,
  };
  const updateOptions = {
    method: "PUT",
    headers: myHeaders,
    body,
  };
  const deleteContact = (id) => {
    fetch(`${BACKEND_URL}/contacts/${id}`, deleteRequest).then((res) => {
      if (res) {
        fetch(`${BACKEND_URL}/contacts`)
          .then((response) => response.json())
          .then((contacts) => setContactsList(contacts));
      }
    });
  };
  const updateUser = (id) => {
    fetch(`${BACKEND_URL}/contacts/${id}`, updateOptions).then((res) => {
      if (res) {
        fetch(`${BACKEND_URL}/contacts`)
          .then((response) => response.json())
          .then((contacts) => setContactsList(contacts));
      }
    });
  };
  return (
    <div className="card">
      <div className="contact-header">
        {update ? (
          <h2>{contact.name}</h2>
        ) : (
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <div className="contact-manage">
          <button
            type="button"
            onClick={() => {
              setUpdate(!update);
              setter();
            }}
          >
            <img src="../../src/assets/icons8-edit-64.png" alt="" />
          </button>
          <button type="button" onClick={() => deleteContact(contact.id)}>
            <img src="../../src/assets/icons8-remove-64.png" alt="" />
          </button>
        </div>
      </div>
      {update ? (
        <div className="card-info">
          <h3>{contact.email}</h3>
          <h3>{contact.phone_number}</h3>
          <h3>{contact.address}</h3>
          <h3>{contact.category_id === 1 ? "Famille" : "Amis"}</h3>
        </div>
      ) : (
        <div className="card-info">
          <form action="submit">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="phone_number"
              id="phone_number"
              value={phone_number}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <select
              onChange={(e) => setCategory(e.target.value)}
              id="category_id"
            >
              <option value="2">Amis</option>

              <option value="1">Famille</option>
            </select>
          </form>
          <button
            type="submit"
            className="submit-button"
            onClick={() => {
              updateUser(contact.id);
              setUpdate(!update);
            }}
          >
            <img
              src="../../src/assets/icons8-approval-64.png"
              alt=""
              className="valid-img"
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default ContactCard;

import React, { useEffect, useState } from "react";
import AddContact from "../components/AddContact";
import ContactCard from "../components/ContactCard";

function Contacts() {
  const [contactsList, setContactsList] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    fetch(`${BACKEND_URL}/contacts`)
      .then((res) => res.json())
      .then((contacts) => setContactsList(contacts))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="contacts">
      <AddContact setContactsList={setContactsList} />
      <h2 className="contact-title">Mes contact</h2>
      <div className="contact-list">
        {contactsList.map((contact) => (
          <ContactCard
            contact={contact}
            key={contact.id}
            setContactsList={setContactsList}
          />
        ))}
      </div>
    </div>
  );
}

export default Contacts;

import React from "react";
import LCard from "./leadercard";
import contacts from "./leadercon";

function createCard(contact) {
  return (
    <LCard
      key={contact.id}
      name={contact.name}
      img={contact.src}
      roles={contact.role}
      email={contact.email}
    />
  );
}

function LApp() {
  return (
      <div className="leads">
          {contacts.map(createCard)}     
      </div>
   
  );
}

export default LApp;

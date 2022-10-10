import React from "react";
import LeCard from "./leadcard";
import contacts from "./leadcon";

function createCard(contact) {
  return (
    <LeCard
      key={contact.id}
      name={contact.name}
      img={contact.src}
      roles={contact.role}
      email={contact.email}
    />
  );
}

function LeApp() {
  return (
      <div className="leads">
          {contacts.map(createCard)}     
      </div>
   
  );
}

export default LeApp;

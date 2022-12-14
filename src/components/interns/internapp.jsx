import React from "react";
import InCard from "./interncard";
import contacts from "./interncon";

function createCard(contact) {
  return (
    <InCard
      key={contact.id}
      name={contact.name}
      img={contact.src}
      roles={contact.role}
      linkedin={contact.Linkedin}
      github={contact.github}
    />
  );
}

function InApp() {
  return (
      <div className="leads">
          {contacts.map(createCard)}     
      </div>
   
  );
}

export default InApp;

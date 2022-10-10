import React from "react";
import Leader from "../src/components/leaders/leader";
import Team from "./components/team";
import Lead from "./components/leads/lead";
import Intern from "./components/interns/intern";

function App() {
    return (
      <div>
            <Team />     
            <Leader />  
            <Lead />
            <Intern/>
      </div>
  
    );
  }
  
  export default App;
  
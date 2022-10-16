import React from "react";
import InAvatar from "./internava";
import InDetail from "./interndetail";

function InCard(props) {
  return (
    <div className="card">
      <div className="left">
        <InAvatar img={props.img} />
      </div>
      
      <div className="bottom">
        <h2 className="name">{props.name}</h2>
        <InDetail detailInfo={props.roles} />
        <div id="id">
          <InDetail detailInfo={props.linkedin} />
          <InDetail detailInfo={props.github} />

        </div>
      </div>
</div>
  );
}

export default InCard;

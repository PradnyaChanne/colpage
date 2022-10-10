import React from "react";
import InAvatar from "./internava";
import InDetail from "./interndetail";

function InCard(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <InAvatar img={props.img} />
      </div>
      <div className="bottom">
        <InDetail detailInfo={props.roles} />
        <InDetail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default InCard;

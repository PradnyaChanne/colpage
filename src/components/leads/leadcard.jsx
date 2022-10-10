import React from "react";
import LeAvatar from "./leadava";
import LeDetail from "./leaddetail";

function LeCard(props) {
  return (
    <div className="card">
      <div className="left">
        <LeAvatar img={props.img} />
      </div>
      <div className="bottom">
        <h2 className="name">{props.name}</h2>
        <LeDetail detailInfo={props.roles} />
        <LeDetail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default LeCard;

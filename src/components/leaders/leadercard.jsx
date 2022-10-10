import React from "react";
import LAvatar from "./leaderava";
import LDetail from "./leaderdetail";

function LCard(props) {
  return (
    <div className="card">
      <div className="left">
        <LAvatar img={props.img} />
      </div>
      
      <div className="bottom">
        <h2 className="name">{props.name}</h2>
        <LDetail detailInfo={props.roles} />
        <LDetail detailInfo={props.email} />
      </div>
</div>
  );
}

export default LCard;

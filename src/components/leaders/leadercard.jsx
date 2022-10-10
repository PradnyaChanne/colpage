import React from "react";
import LAvatar from "./leaderava";
import LDetail from "./leaderdetail";

function LCard(props) {
  return (
    <div className="card">
      
        <h2 className="name">{props.name}</h2>
        <LAvatar img={props.img} />
      
      <div className="bottom">
        <LDetail detailInfo={props.roles} />
        <LDetail detailInfo={props.email} />
      </div>
</div>
  );
}

export default LCard;

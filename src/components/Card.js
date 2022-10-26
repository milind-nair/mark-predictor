import React from "react";

function Card(props) {
  return (
    <div className="mx-2 my-2 text-center">
      <div className="card " style={{ width: "18rem" }}>
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">
          {props.desc}
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

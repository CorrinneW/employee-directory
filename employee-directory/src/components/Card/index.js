import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div id="accordion">
      <div className="card">
        <div className="card-header" id="heading">
          <h5 className="mb-0">
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapse" aria-expanded="true" aria-controls="collapseOne">
              {props.firstName} {props.lastName} | {props.id}
            </button>
          </h5>
        </div>

        <div id="collapse" className="collapsed" aria-labelledby="heading" data-parent="#accordion">
          <div className="card-body">
            <div className="card-img-top" src={props.picture} alt={props.firstName + ' ' + props.lastName} />
            <div className="card-body">
              <h5 className="card-title">Contact Information:</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Location: {props.city}, {props.state}</li>
                <li className="list-group-item">Email: {props.email}</li>
                <li className="list-group-item">Phone: {props.phone}</li>
                <li className="list-group-item">Cell: {props.cell}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

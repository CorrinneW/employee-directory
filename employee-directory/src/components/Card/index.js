import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" id="accordion">
      <div className="card-header" id="heading">
        <h5 className="mb-0">
          <button className="btn btn-link" data-toggle="collapse" data-target="#collapse" aria-expanded="true" aria-controls="collapseOne">
            {props.name} | {props.id.value}
          </button>
        </h5>
      </div>

      <div id="collapse" className="collapsed" aria-labelledby="heading" data-parent="#accordion">
        <div className="card-body">
          <div className="card-img-left" src={props.picture.medium} alt={props.name} />
          <div class="card-body">
            <h5 class="card-title">Contact Information:</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Location: {props.location.city}, {props.location.state} {props.location.zip}</li>
              <li class="list-group-item">Time Zone: {props.location.timezone}</li>
              <li class="list-group-item">Email: {props.email}</li>
              <li class="list-group-item">Phone: {props.phone}</li>
              <li class="list-group-item">Cell: {props.cell}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

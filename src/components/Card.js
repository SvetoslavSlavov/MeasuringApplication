import React from "react";

export default function Card({
  cardHeaderText,
  cardSecondHeaderText,
  cardTitle,
  cardText,
  readMore,
  cardFooterText,
  cardWrittenBy,
}) {
  return (
    <div className="row">
      <div className="col-md-8">
        <h1 className="my-4">
          {cardHeaderText}
          <small>{cardSecondHeaderText}</small>
        </h1>
        <div className="card mb-4">
          <img
            className="card-img-top"
            src="http://placehold.it/750x300"
            alt="Card image cap"
          />
          <div className="card-body">
            <h2 className="card-title">{cardTitle}</h2>
            <p className="card-text">{cardText}</p>
            <a href="#" className="btn btn-primary">
              {readMore}
            </a>
          </div>
          <div className="card-footer text-muted">
            {cardFooterText}
            <a href="#">{cardWrittenBy}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

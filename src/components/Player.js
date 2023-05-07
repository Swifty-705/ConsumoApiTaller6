import React from "react";

const Players = ({ players = [] }) => {

  return (
    <div className="row">
      {players.map((player) => (
        <div key={player.id} className="col-md-4 mb-4">
          <div className="card">
            <h5 className="card-header">{player.name}</h5>
            <div className="card-body">
              <h5 className="card-title">Numero</h5>
              <p className="card-text">{player.number}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;

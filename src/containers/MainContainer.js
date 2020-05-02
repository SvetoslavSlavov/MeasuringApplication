import React, { useState } from "react";
import Card from "../components/Card";
import dummyData from "../data/dummyData.json";

function MainContainer() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="container">
      <button
        style={{ width: "200px", height: "200px" }}
        onClick={() => setClicked(!clicked)}
      >
        {clicked ? "THIS IS CLIKED" : "UNACTIVE"}
      </button>
      {dummyData.map(({ title, id }) => (
        <Card cardHeaderText={title} key={id} />
      ))}
    </div>
  );
}

export default MainContainer;

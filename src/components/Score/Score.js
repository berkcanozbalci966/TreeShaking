import React from "react";

function Score(props) {
  const { score } = props;
  return <h2>SCORE : {score || 0} </h2>;
}

export default Score;

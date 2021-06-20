import React from "react";
import { ReactComponent as Tree } from "../../global/assets/images/tree.svg";
import "./Tree.scss";

// Components
import Apple from "../Apple/Apple";

function TreeComponent(props) {
  const { className } = props;
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div className={className}>
        <Tree />
        <Apple />
        <Apple />
        <Apple />
      </div>
    </div>
  );
}

export default TreeComponent;

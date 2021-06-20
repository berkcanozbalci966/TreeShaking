import React from "react";
import { ReactComponent as Tree } from "../../global/assets/images/tree.svg";
import "./Tree.scss";

function TreeComponent(props) {
  const { className } = props;
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div className={className}>
        <Tree />
        {props.children}
      </div>
    </div>
  );
}

export default TreeComponent;

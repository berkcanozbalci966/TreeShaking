import React, { useEffect } from "react";
import { ReactComponent as TreeImg } from "../../global/assets/images/tree.svg";
import "./Tree.scss";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { initTree } from "../../store/tree";

// Components
import Apple from "../Apple/Apple";

function TreeComponent(props) {
  const apples = useSelector((state) => state.tree.apples);
  const treeState = useSelector((state) => state.tree.treeState);
  const dispatch = useDispatch();

  const { shakeTreeState } = props;

  useEffect(() => {
    if (!treeState) {
      dispatch(initTree());
    }
  }, [dispatch, treeState]);

  return (
    <div
      data-testid="tree"
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <div
        className={
          shakeTreeState
            ? "animate__animated animate__wobble animate__slower"
            : null
        }
      >
        <TreeImg />{" "}
        {apples.map((coordinate, index) => (
          <Apple
            key={"apple-" + index}
            index={index}
            coordinate={coordinate}
            data-testid="apple"
          />
        ))}
      </div>
    </div>
  );
}

export default TreeComponent;

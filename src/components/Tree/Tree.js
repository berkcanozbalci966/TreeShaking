import React, { useEffect } from "react";
import { ReactComponent as TreeImg } from "../../global/assets/images/tree.svg";
import "./Tree.scss";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  appleCoordinateGenerator,
  removeApple,
  checkAppleCoordinate,
} from "../../store/tree";

// Components
import Apple from "../Apple/Apple";

function TreeComponent(props) {
  const apples = useSelector((state) => state.tree.apples);
  const checkStatus = useSelector((state) => state.tree.checkStatus);
  const dispatch = useDispatch();

  const { shakeTreeState } = props;
  useEffect(() => {
    dispatch(appleCoordinateGenerator());
    dispatch(appleCoordinateGenerator());
    dispatch(appleCoordinateGenerator());
    dispatch(appleCoordinateGenerator());
    dispatch(checkAppleCoordinate());

    // setTimeout(() => {   dispatch(removeApple(0)); }, 1000);
  }, [dispatch]);

  console.log("apples", apples);
  console.log("status", checkStatus);
  return (
    <div
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
          <Apple key={"apple-" + index} coordinate={coordinate} />
        ))}
      </div>
    </div>
  );
}

export default TreeComponent;

import React, { useEffect } from "react";
import { ReactComponent as TreeImg } from "../../global/assets/images/tree.svg";
import "./Tree.scss";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { appleCoordinateGenerator } from "../../store/tree";

// Components
import Apple from "../Apple/Apple";

function TreeComponent(props) {
  const apples = useSelector((state) => state.tree.apples);
  const dispatch = useDispatch();
  console.log(apples);
  useEffect(() => {
    dispatch(appleCoordinateGenerator());
    dispatch(appleCoordinateGenerator());
    dispatch(appleCoordinateGenerator());
    dispatch(appleCoordinateGenerator());
  }, [dispatch]);

  const { className } = props;
  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <div className={className}>
        <TreeImg />
        {apples.map((coordinate, index) => (
          <Apple key={"apple-" + index} coordinate={coordinate} />
        ))}
      </div>
    </div>
  );
}

export default TreeComponent;

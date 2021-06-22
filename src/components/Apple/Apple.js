import React, { useEffect } from "react";
import useStateRef from "react-usestateref";
import { ReactComponent as AppleImg } from "../../global/assets/images/apple.svg";
import "./Apple.scss";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { appleFallingDone, checkAppleFallingDone } from "../../store/tree";

function Apple(props) {
  const dispatch = useDispatch();
  const { coordinate, index } = props;
  const [appleLocation, setAppleLocation, locationRef] =
    useStateRef(coordinate);
  const shakeTreeState = useSelector(
    (state) => state.shakeButton.shakeTreeState
  );

  const treeState = useSelector((state) => state.tree.treeState);

  useEffect(() => {
    // Drop Apples with timeout
    if (shakeTreeState) {
      setTimeout(() => {
        const yInterval = setInterval(() => {
          setAppleLocation({
            y: locationRef.current.y + 1,
            done: false,
          });

          if (locationRef.current.y >= 90) {
            // Set drop status done
            setAppleLocation({
              y: locationRef.current.y,
              done: true,
            });
            dispatch(appleFallingDone(index));
            dispatch(checkAppleFallingDone());
            clearInterval(yInterval);
          }
        }, 50);
      }, 3000);
    }
  }, [
    shakeTreeState,
    locationRef,
    setAppleLocation,
    treeState,
    dispatch,
    index,
  ]);

  return (
    <div
      style={{
        position: "absolute",
        top: appleLocation.y + "%",
        left: appleLocation.x + "%",
      }}
    >
      <AppleImg
        style={{
          display: appleLocation.done ? "none" : "block",
        }}
        className="apple"
      />
    </div>
  );
}

export default Apple;

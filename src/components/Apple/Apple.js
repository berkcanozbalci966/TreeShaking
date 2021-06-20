import React, { useEffect } from "react";
import useStateRef from "react-usestateref";
import { ReactComponent as AppleImg } from "../../global/assets/images/apple.svg";
import { useSelector } from "react-redux";
import "./Apple.scss";

function Apple(props) {
  const { coordinate } = props;
  const [appleLocation, setAppleLocation, locationRef] =
    useStateRef(coordinate);
  const shakeTreeState = useSelector(
    (state) => state.shakeButton.shakeTreeState
  );

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
            clearInterval(yInterval);
            // Set drop status done
            setAppleLocation({ y: locationRef.current.y, done: true });
          }
        }, 50);
      }, 4000);
    }
  }, [shakeTreeState, locationRef, setAppleLocation]);

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

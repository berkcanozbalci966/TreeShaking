import React from "react";
import "./ShakeButton.scss";
import { useSelector, useDispatch } from "react-redux";
import { shakeTreeToggler, shakeDone } from "../../store/shakeButtonSlice";

function ShakeButton(props) {
  const shakeTreeState = useSelector(
    (state) => state.shakeButton.shakeTreeState
  );
  const dispatch = useDispatch();

  const shakeThatTree = () => {
    dispatch(shakeTreeToggler());
    setTimeout(() => {
      dispatch(shakeDone());
    }, 3000);
  };

  return (
    <div>
      <button
        disabled={shakeTreeState ? true : null}
        onClick={() => shakeThatTree()}
      >
        Shake that tree
      </button>
    </div>
  );
}

export default ShakeButton;

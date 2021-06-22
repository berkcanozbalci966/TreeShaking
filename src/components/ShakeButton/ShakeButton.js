import React from "react";
import "./ShakeButton.scss";
import { useSelector, useDispatch } from "react-redux";
import { shakeTree, shakeDone } from "../../store/shakeButtonSlice";

function ShakeButton(props) {
  const shakeTreeState = useSelector(
    (state) => state.shakeButton.shakeTreeState
  );
  const dispatch = useDispatch();

  const shakeThatTree = () => {
    dispatch(shakeTree());
    setTimeout(() => {
      dispatch(shakeDone());
    }, 4000);
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

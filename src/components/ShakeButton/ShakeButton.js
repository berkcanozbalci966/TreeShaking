import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { shakeTreeToggler, shakeDone } from "../../store/treeSlice";

function ShakeButton(props) {
  const shakeTreeState = useSelector((state) => state.tree.shakeTreeState);
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
        disabled={!shakeTreeState ? false : true}
        onClick={() => shakeThatTree()}
      >
        Shake that tree
      </button>
    </div>
  );
}

export default ShakeButton;

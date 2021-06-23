import React, { useEffect } from "react";
import "./ShakeButton.scss";
import { useSelector, useDispatch } from "react-redux";
import { shakeTree, shakeDone } from "../../store/shakeButtonSlice";

function ShakeButton(props) {
  const shakeTreeState = useSelector(
    (state) => state.shakeButton.shakeTreeState
  );

  const treeState = useSelector((state) => state.tree.treeState);

  const dispatch = useDispatch();
  // Shake Method
  const shakeThatTree = () => {
    dispatch(shakeTree());
    setTimeout(() => {}, 3000);
  };

  useEffect(() => {
    if (!treeState) dispatch(shakeDone());
  }, [treeState, dispatch]);

  return (
    <div>
      <button
        disabled={shakeTreeState ? true : null}
        className={!shakeTreeState ? "active" : null}
        onClick={() => shakeThatTree()}
      >
        Shake that tree
      </button>
    </div>
  );
}

export default ShakeButton;

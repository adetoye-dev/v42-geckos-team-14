import { useRef, useContext } from "react";
import Context from "./Context";
import "./Resizer.css";

function Component(props) {
  const { setOpenEditTab } = useContext(Context);
  const { setCurrentComponentId } = useContext(Context);

  const componentRef = useRef(null);

  function handleDoubleClick(id) {
    setOpenEditTab(true);
    setCurrentComponentId(id);
  }

  return (
    <div
      id={props.id}
      className={props.class}
      ref={componentRef}
      onDoubleClick={() => handleDoubleClick(props.id)}
    >
      {props.text}
    </div>
  );
}

export default Component;

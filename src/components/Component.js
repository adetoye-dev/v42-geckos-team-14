import { useRef } from "react";
import "./Resizer.css";

function Component(props) {
  const componentRef = useRef(null);

  return (
    <div
      id={props.id}
      className={props.class}
      ref={componentRef}
      onDoubleClick={() => props.handleDoubleClick(props.id)}
    >
      {props.text}
    </div>
  );
}

export default Component;

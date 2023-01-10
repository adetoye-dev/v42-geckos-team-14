import { useState } from "react";
import useDragAndDrop from "../hooks/useDragAndDrop";

function Component(props) {
  const [position, setPosition] = useState(props.startPosition);
  const { mouseDownHandler, mouseUpHandler, mouseMoveHandler } = useDragAndDrop();

  const myStyle = {
    position: "absolute",
    top: `${position.top}px`,
    left: `${position.left}px`,
  }

    return (
        <div 
        className={`${props.class}`} 
        style={myStyle}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        // onMouseMove={mouseMoveHandler}
        >
            ExampleComponent
        </div>
    );
}

export default Component;
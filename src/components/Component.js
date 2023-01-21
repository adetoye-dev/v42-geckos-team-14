import { useRef, useState } from "react";
import useDragAndDrop from "../hooks/useDragAndDrop";
import ComponentMenu from "./ComponentMenu";
import useResizable from "../hooks/useResizable";
import "./Resizer.css";

function Component(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsComponentMove, componentPosition } = useDragAndDrop(
    props.startPosition,
    props.previewAreaBoundaries
  );

  const componentRef = useRef(null);

  const [resizable, componentWidth, componentHeight, activateResize] =
    useResizable(componentRef);

  const myStyle = {
    position: "absolute",
    top: `${componentPosition.top}px`,
    left: `${componentPosition.left}px`,
    width: componentWidth,
    height: componentHeight,
  };

  function mouseDownHandler(e) {
    const leftMouseButton = 0;
    e.button === leftMouseButton && !isMenuOpen && setIsComponentMove(true);
  }

  function stopMoveHandler(value) {
    setIsComponentMove(false);
    setIsMenuOpen(value);
  }

  return (
    <div
      className={
        resizable ? `${props.class} resizeable-element` : `${props.class}`
      }
      style={myStyle}
      ref={componentRef}
      onMouseDown={(e) => mouseDownHandler(e)}
    >
      <ComponentMenu
        onResizeClick={activateResize}
        refId={componentRef}
        onStopComponentMove={stopMoveHandler}
      />
      ExampleComponent
    </div>
  );
}

export default Component;

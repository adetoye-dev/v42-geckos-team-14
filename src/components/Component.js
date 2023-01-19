import { useRef, useState } from "react";
import useDragAndDrop from "../hooks/useDragAndDrop";
import useResizer from "../hooks/useResizer";
import ComponentMenu from "./ComponentMenu";

function Component(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsComponentMove, componentPosition } = useDragAndDrop(props.startPosition, props.previewAreaBoundaries);

  const myStyle = {
    position: "absolute",
    top: `${componentPosition.top}px`,
    left: `${componentPosition.left}px`,
  };

  function mouseDownHandler(e) {
    const leftMouseButton = 0;
    e.button === leftMouseButton && !isMenuOpen && setIsComponentMove(true);
  }

  const [updateResizerRef] = useResizer(null);

  const componentRef = useRef(null);

  function stopMoveHandler(value) {
    setIsComponentMove(false);
    setIsMenuOpen(value)
  };

  return (
    <div 
      className={`${props.class}`}
      style={myStyle}
      ref={componentRef}
      onMouseDown={(e) => mouseDownHandler(e)}
    >
      <ComponentMenu onResizeClick={updateResizerRef} refId={componentRef} onStopComponentMove={stopMoveHandler}/>
      ExampleComponent
    </div>
  );
}

export default Component;

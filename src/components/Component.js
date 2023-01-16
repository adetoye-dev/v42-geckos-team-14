import { useRef } from "react";
import useDragAndDrop from "../hooks/useDragAndDrop";
import useResizer from "../hooks/useResizer";
import ComponentMenu from "./ComponentMenu";

function Component(props) {
  const { setIsComponentMove, componentPosition } = useDragAndDrop(
    props.startPosition
  );

  const myStyle = {
    position: "absolute",
    top: `${componentPosition.top}px`,
    left: `${componentPosition.left}px`,
  };
  // const myStyle = {
  //   position: "absolute",
  //   top: `${componentPosition.top}px`,
  //   left: `${componentPosition.left}px`,
  // }

  function mouseDownHandler(e) {
    const leftMouseButton = 0;
    e.button === leftMouseButton && setIsComponentMove(true);
  }

  const [updateResizerRef] = useResizer(null);

  const componentRef = useRef(null);

  return (
    <div
      className={`${props.class}`}
      style={myStyle}
      ref={componentRef}
      onMouseDown={(e) => mouseDownHandler(e)}
    >
      <ComponentMenu onResizeClick={updateResizerRef} refId={componentRef} />
      ExampleComponent
    </div>
  );
}

export default Component;

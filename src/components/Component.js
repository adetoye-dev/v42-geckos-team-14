import { useRef, useState } from "react";
import useDragAndDrop from "../hooks/useDragAndDrop";
import ComponentMenu from "./ComponentMenu";
import useResizable from "../hooks/useResizable";
import useDeleteComponent from "../hooks/useDeleteComponent";
import "./Resizer.css";

function Component(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsComponentMove, componentPosition } = useDragAndDrop(
    props.startPosition
  );
  const deleteComponent = useDeleteComponent();

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

  function deleteClickHandler(id) {
    deleteComponent(id);
  }

  return (
    <div
      id={props.id}
      className={
        resizable
          ? `${props.class} resizeable-element`
          : `${props.class} surrounding-element`
      }
      style={myStyle}
      ref={componentRef}
      onMouseDown={(e) => mouseDownHandler(e)}
    >
      <ComponentMenu
        onResizeClick={activateResize}
        refId={componentRef}
        onStopComponentMove={stopMoveHandler}
        // onDeleteClick={useDelete(componentRef)}
        onDeleteClick={() => deleteClickHandler(props.id)}
      />
      ExampleComponent
    </div>
  );
}

export default Component;

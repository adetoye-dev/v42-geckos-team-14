import { useRef, useState } from "react";
import useDragAndDrop from "../hooks/useDragAndDrop";
import ComponentMenu from "./ComponentMenu";
import useResizable from "../hooks/useResizable";
import useDeleteComponent from "../hooks/useDeleteComponent";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
      onDoubleClick={() => console.log("I was double clicked!")}
    >
      {/* <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
      {props.text}
      <ComponentMenu
        onResizeClick={activateResize}
        refId={componentRef}
        onStopComponentMove={stopMoveHandler}
        // onDeleteClick={useDelete(componentRef)}
        onDeleteClick={() => deleteClickHandler(props.id)}
      />
    </div>
  );
}

export default Component;

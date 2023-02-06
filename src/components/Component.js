import { useRef, useState, useContext } from "react";
import Context from "./Context";
import useDragAndDrop from "../hooks/useDragAndDrop";
import useResizable from "../hooks/useResizable";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Resizer.css";

function Component(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setOpenEditTab } = useContext(Context);
  const { setCurrentComponentId } = useContext(Context);
  const { setIsComponentMove, componentPosition } = useDragAndDrop(
    props.startPosition
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

  function handleDoubleClick(id) {
    setOpenEditTab(true);
    setCurrentComponentId(id);
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
      onDoubleClick={() => handleDoubleClick(props.id)}
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
    </div>
  );
}

export default Component;

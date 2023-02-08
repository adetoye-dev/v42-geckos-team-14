import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDraggable from "../hooks/useDraggable";

function ComponentListItem(props) {
  const { handleDragStart } = useDraggable();
  return (
    <button
      className={`${props.className}`}
      id={`${props.id}`}
      // onClick={props.handleClick}
      draggable
      onDragStart={(e) => handleDragStart(e, props.item)}
      ref={props.refId}
    >
      <FontAwesomeIcon size="2x" icon={props.icon}></FontAwesomeIcon>
      <br />
      {props.text}
    </button>
  );
}

export default ComponentListItem;

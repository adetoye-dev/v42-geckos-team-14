import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ComponentListItem(props) {
  return (
    <button
      className={`${props.className}`}
      id={`${props.id}`}
      onClick={props.onClick}
      ref={props.refId}
    >
      <FontAwesomeIcon size="2x" icon={props.icon}></FontAwesomeIcon>
      <br />
      {props.text}
    </button>
  );
}

export default ComponentListItem;

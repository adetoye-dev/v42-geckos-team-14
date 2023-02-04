import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ComponentListItem(props) {
  return (
    <button
      className={`${props.className}`}
      id={`${props.id}`}
      onClick={props.onClick}
      ref={props.refId}
    >
      <FontAwesomeIcon size="2x" icon={faMagnifyingGlass}></FontAwesomeIcon>
      <br />
      {props.text}
    </button>
  );
}

export default ComponentListItem;

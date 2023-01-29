import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ExampleComponentTemplate(props) {
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

export default ExampleComponentTemplate;

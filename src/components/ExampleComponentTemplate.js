function ExampleComponentTemplate(props) {
  return (
    <div
      className={`${props.className}`}
      id={`${props.id}`}
      onClick={props.onClick}
      ref={props.refId}
    >
      {props.text}
    </div>
  );
}

export default ExampleComponentTemplate;

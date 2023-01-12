function ExampleComponentTemplate(props) {
  return (
    <div
      className={`${props.className}`}
      id={`${props.id}`}
      onClick={props.onClick}
      ref={props.refId}
    >
      Example
    </div>
  );
}

export default ExampleComponentTemplate;

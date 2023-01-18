import useDragAndDrop from "../hooks/useDragAndDrop";


function Component(props) {
  const { setIsComponentMove, componentPosition } = useDragAndDrop(props.startPosition, props.previewAreaBoundaries);
  
  const myStyle = {
    position: "absolute",
    top: `${componentPosition.top}px`,
    left: `${componentPosition.left}px`,
  };

  function mouseDownHandler(e) {
    const leftMouseButton = 0;
    e.button === leftMouseButton && setIsComponentMove(true);
  };

    return (
        <div 
        className={`${props.class}`} 
        style={myStyle}
        onMouseDown={(e)=>mouseDownHandler(e)}
        >
            ExampleComponent
        </div>
    );
}

export default Component;
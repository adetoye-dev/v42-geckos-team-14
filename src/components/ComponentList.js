import ExampleComponentTemplate from "./ExampleComponentTemplate";
import useResizer from "../hooks/useResizer";
import "./Resizer.css";
import { useRef } from "react";

function ComponentList(props) {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);

  const [updateResizerRef] = useResizer(null);
  return (
    <section id="ComponentList" onClick={props.onSelectComponent}>
      <ExampleComponentTemplate
        className="c1"
        id="c1"
        refId={refOne}
        onClick={() => updateResizerRef(refOne)}
        text="Component 1"
      />
      <div ref={refTwo} className="c2" onClick={() => updateResizerRef(refTwo)}>
        Component 2
      </div>
      <div
        ref={refThree}
        className="c3"
        onClick={() => updateResizerRef(refThree)}
      >
        Component 3
      </div>
    </section>
  );
}

export default ComponentList;

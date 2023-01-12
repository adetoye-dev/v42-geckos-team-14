import useResizer from "./useResizer";
import "./Resizer.css";
import { useRef } from "react";

function ComponentList() {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);

  const [updateResizerRef] = useResizer(null);
  return (
    <section>
      <div ref={refOne} className="c1" onClick={() => updateResizerRef(refOne)}>
        Component 1
      </div>
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

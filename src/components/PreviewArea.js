import React, { useEffect, useRef, useState, useContext } from "react";
import Component from "./Component";
import Context from "./Context";

function PreviewArea(props) {
  const { sethtmlCode } = useContext(Context);
  const { showTab } = useContext(Context);
  const [previewAreaBoundaries, setPreviewAreaBoundaries] = useState(null);
  const previewAreaRef = useRef(null);

  function checkPreviewBoundaries() {
    const preview = previewAreaRef.current;
    setPreviewAreaBoundaries({
      left: preview.getBoundingClientRect().left,
      right: preview.getBoundingClientRect().right,
      top: preview.getBoundingClientRect().top,
      bottom: preview.getBoundingClientRect().bottom,
    });
  }

  useEffect(() => {
    checkPreviewBoundaries();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkPreviewBoundaries);
    return () => {
      window.removeEventListener("resize", checkPreviewBoundaries);
    };
  }, []);

  const renderComponents = props.components.map((component, index) => (
    <Component
      class={component.className}
      startPosition={{ top: component.offsetTop, left: component.offsetLeft }}
      previewAreaBoundaries={previewAreaBoundaries}
      key={`${component.id}${index}`}
    />
  ));

  return (
    <div>
      <span className="overlapArea">
        <section
          className={
            showTab === "web" ? "previewArea showTab" : "previewArea hideTab"
          }
          ref={previewAreaRef}
        >
          {renderComponents}
        </section>
        <section
          className={
            showTab === "code" ? "codeArea showTab" : "codeArea hideTab"
          }
        >
          <pre id="generatedCode" onChange={(e) => sethtmlCode(e.target.value)}>
            The code will be here
          </pre>
        </section>
      </span>
    </div>
  );
}

export default PreviewArea;

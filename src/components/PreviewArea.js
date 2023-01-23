import React, { useEffect, useRef, useState, useContext } from "react";
import Component from "./Component";
import Context from "./Context";

function PreviewArea(props) {
  const { components } = useContext(Context);
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

  const renderComponents = components.map((component, index) => (
    <Component
      class={component.className}
      startPosition={{ top: component.offsetTop, left: component.offsetLeft }}
      previewAreaBoundaries={previewAreaBoundaries}
      key={`${component.id}${index}`}
    />
  ));

  if (showTab === "web")
    return (
      <section className="showTab workArea" ref={previewAreaRef}>
        {renderComponents}
      </section>
    );

  if (showTab === "code")
    return (
      <section className="showTab workArea">
        <pre id="generatedCode" onChange={(e) => sethtmlCode(e.target.value)}>
          The code will be here
        </pre>
      </section>
    );
}

export default PreviewArea;

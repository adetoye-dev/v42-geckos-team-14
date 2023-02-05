import React, { useEffect, useRef, useContext } from "react";
import Context from "./Context";

function PreviewArea(props) {
  const { components } = useContext(Context);
  const { sethtmlCode } = useContext(Context);
  const { showTab } = useContext(Context);
  const { setPreviewAreaBoundaries } = useContext(Context);
  const previewAreaRef = useRef(null);

  function checkPreviewBoundaries() {
    const preview = previewAreaRef.current;
    setPreviewAreaBoundaries({
      left: preview.offsetLeft,
      right: preview.offsetLeft + preview.offsetWidth,
      top: preview.offsetTop,
      bottom: preview.offsetTop + preview.offsetHeight,
      middleY: preview.offsetTop + preview.offsetHeight / 2,
      middleX: preview.offsetLeft + preview.offsetWidth / 2,
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

  const renderComponents = components.map((component) => component);

  if (showTab === "web")
    return (
      <section className="showTab workArea">
        <div className="previewArea" ref={previewAreaRef}>
          {renderComponents}
        </div>
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

import React, {  useEffect, useRef, useState } from "react";
import Component from "./Component";

function PreviewArea(props) {
  const [htmlCode, sethtmlCode] = useState("The code will be here");
  const [showTab, setShowTab] = useState(true);
  const [previewAreaBoundaries, setPreviewAreaBoundaries] = useState(null);
  const previewAreaRef = useRef(null);

  async function saveToFile() {
    let myBlob = new Blob([htmlCode], { type: "text/document" });
    let url = URL.createObjectURL(myBlob);
    let link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "index.html");
    link.click();
  }

  function checkPreviewBoundaries() {
    const preview = previewAreaRef.current;
    setPreviewAreaBoundaries({
        left: preview.getBoundingClientRect().left,
        right: preview.getBoundingClientRect().right,
        top: preview.getBoundingClientRect().top,
        bottom: preview.getBoundingClientRect().bottom
      })
  }

  useEffect(()=>{
    checkPreviewBoundaries()
  },[])

  useEffect(() => {
    window.addEventListener('resize', checkPreviewBoundaries);
    return () => {
      window.removeEventListener('resize', checkPreviewBoundaries);
    }
  }, [])

  const renderComponents = props.components.map((component, index) => <Component 
    class={component.className} 
    startPosition={{ top: component.offsetTop , left: component.offsetLeft }}
    previewAreaBoundaries={previewAreaBoundaries} 
    key={`${component.id}${index}`} 
  />)
  
  return (
    <div>
      <span>
        <button className="btnShowTab" onClick={() => setShowTab(true)}>
          PREVIEW
        </button>
        <button className="btnShowTab" onClick={() => setShowTab(false)}>
          CODE
        </button>
      </span>
      <span className="overlapArea">
        <section
          className={showTab ? "previewArea showTab" : "previewArea hideTab"}
          ref={previewAreaRef}
        >
          {renderComponents}
        </section>
        <section className={!showTab ? "codeArea showTab" : "codeArea hideTab"}>
          <span>
            <button onClick={saveToFile}>Save</button>
            <button onClick={() => navigator.clipboard.writeText(htmlCode)}> 
              Copy
            </button>
          </span>
          <pre id="generatedCode" onChange={(e) => sethtmlCode(e.target.value)}>
            The code will be here
          </pre>
        </section>
      </span>
    </div>
  );
}

export default PreviewArea;

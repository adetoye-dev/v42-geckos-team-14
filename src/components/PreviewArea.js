import React, { useState } from "react";
import Component from "./Component";

function PreviewArea(props) {
  const [htmlCode, sethtmlCode] = useState("The code will be here");
  const [showTab, setShowTab] = useState(true);

  async function saveToFile() {
    let myBlob = new Blob([htmlCode], { type: "text/document" });
    let url = URL.createObjectURL(myBlob);
    let link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "index.html");
    link.click();
  }

  const renderComponents = props.components && props.components.map(component => <Component class={component.className} key={component.id}/>)
  

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
        >
          {renderComponents}
        </section>
        <section className={!showTab ? "codeArea showTab" : "codeArea hideTab"}>
          <button onClick={saveToFile}>Save</button>
          <pre id="generatedCode" onChange={(e) => sethtmlCode(e.target.value)}>
            The code will be here
          </pre>
        </section>
      </span>
    </div>
  );
}

export default PreviewArea;

import ExampleComponentTemplate from "./ExampleComponentTemplate";
import Context from "./Context";
import React, { useContext } from "react";

function ComponentList(props) {
  const { showTab } = useContext(Context);
  const { htmlCode } = useContext(Context);

  async function saveToFile() {
    let myBlob = new Blob([htmlCode], { type: "text/document" });
    let url = URL.createObjectURL(myBlob);
    let link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "index.html");
    link.click();
  }

  if (showTab === "web")
    return (
      <section id="ComponentList" onClick={props.onSelectComponent}>
        <ExampleComponentTemplate className="c1" id="c1" text="Component 1" />
        <div className="c2">Component 2</div>
        <div className="c3">Component 3</div>
      </section>
    );
  if (showTab === "code")
    return (
      <section className="codeMenu">
        <span>
          <button onClick={saveToFile}>Save</button>
          <button onClick={() => navigator.clipboard.writeText(htmlCode)}>
            Copy
          </button>
        </span>
      </section>
    );
}

export default ComponentList;

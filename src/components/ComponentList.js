import React, { useContext } from "react";
import Context from "./Context";
import ExampleComponentTemplate from "./ExampleComponentTemplate";
import useAddComponent from "../hooks/useAddComponent";

function ComponentList(props) {
  const { showTab } = useContext(Context);
  const { htmlCode } = useContext(Context);
  const { addComponent } = useAddComponent();

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
      <section id="ComponentList" onClick={(e) => addComponent(e)}>
        <ExampleComponentTemplate className="c1" id="c1" text="Component 1" />
        <div className="c2" id="c2">Component 2</div>
        <div className="c3" id="c3">Component 3</div>
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
  if (showTab === "mob")
    return (
      <section className="codeMenu">
        <br />
        <h1>Mobile will be implemented after MVP is finished!</h1>
      </section>
    );
}

export default ComponentList;

import React, { useContext } from "react";
import Context from "./Context";
import ExampleComponentTemplate from "./ExampleComponentTemplate";
import useAddComponent from "../hooks/useAddComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons"; 
import { faTextHeight } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import allcomponents from "../allcomponents"; // List of components to render

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
        <SearchBar />
        <ExampleComponentTemplate className="c1" id="c1" text="Navbar" />
        <br />
        <div className="c2 fs-5 text-center" id="c2">
          <FontAwesomeIcon icon={faImages} size="2x"></FontAwesomeIcon>
          <br />
          Image
        </div>
        <br />
        <div className="c3 fs-5 text-center" id="c3">
          <FontAwesomeIcon icon={faTextHeight} size="2x"></FontAwesomeIcon>
          <br />
          Text
        </div>
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

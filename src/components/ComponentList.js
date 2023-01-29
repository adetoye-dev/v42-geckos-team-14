import React, { useContext } from "react";
import Context from "./Context";
import ExampleComponentTemplate from "./ExampleComponentTemplate";
import useAddComponent from "../hooks/useAddComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faCopy, faFileCode, faFileImage, faFileInvoice, faFileLines, faFileShield, faFileSignature, faFolderBlank, faHandPointer, faImages, faMemory } from "@fortawesome/free-solid-svg-icons"; 
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
        <ExampleComponentTemplate
          className="c1 menu-buttons"
          id="c1"
          text="Navbar"
        />
        <br />
        <button className="c2 menu-buttons" id="c2">
          <FontAwesomeIcon size="2x" icon={faFileInvoice}></FontAwesomeIcon>
          <br />
          <p className="m-0">Card</p>
        </button>
        <br />
        <button className="c3 menu-buttons" id="c3">
          <FontAwesomeIcon size="2x" icon={faTextHeight}></FontAwesomeIcon>
          <br />
          <p className="m-0">Text</p>
        </button>
      </section>
    );
  if (showTab === "code")
    return (
      <section className="codeMenu">
        <span>
          <button onClick={saveToFile} className="codepage-buttons">
            <FontAwesomeIcon icon={faFileCode} size="2x"></FontAwesomeIcon>
            <br />
            Save
          </button>
          <br />
          <br />
          <button
            onClick={() => navigator.clipboard.writeText(htmlCode)}
            className="codepage-buttons"
          >
            <FontAwesomeIcon icon={faCopy} size="2x"></FontAwesomeIcon>
            <br />
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

import React, { useContext, useState } from "react";
import Context from "./Context";
import ComponentListItem from "./ComponentListItem";
import useAddComponent from "../hooks/useAddComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faFileCode } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import "./ComponentList.css";
import allcomponents from "../allcomponents"; // List of components to render

function ComponentList(props) {
  const { showTab } = useContext(Context);
  const { htmlCode } = useContext(Context);
  const { addComponent } = useAddComponent();
  const [componentItems, setComponentItems] = useState(allcomponents);

  const findComponent = (input) => {
    const filteredList = allcomponents.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });

    setComponentItems(filteredList);
  };

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
      <section id="ComponentList" className="ComponentList">
        <SearchBar findComponent={findComponent} />
        <h5 className="menu-headings">Standard:</h5>
        <div className="component-list-items">
          {componentItems.map((item) => {
            return (
              <ComponentListItem
                key={item.id}
                className="c1 menu-buttons"
                id={item.id}
                text={item.name}
                icon={item.icon}
                handleClick={(e) => addComponent(item, e)}
              />
            );
          })}
        </div>

        <h5 className="menu-headings">Advanced:</h5>
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

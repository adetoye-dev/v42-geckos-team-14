import React from "react";
import PreviewArea from "./components/PreviewArea";
import ComponentList from "./components/ComponentList";
import NavbarComp from "./components/NavbarComp";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./App.css";
import {
  faAddressCard,
  faList,
  faLink,
  faFileImage,
  faArrowUp,
  faMinus,
  faMagnifyingGlass,
  faFileInvoice,
  faFileLines,
  faTextHeight,
  faFileShield,
  faFileSignature,
  faFolderBlank,
  faHandPointer,
  faImages,
  faMemory,
  faColumns,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAddressCard,
  faList,
  faLink,
  faFileImage,
  faArrowUp,
  faMinus,
  faMagnifyingGlass,
  faFileInvoice,
  faFileLines,
  faTextHeight,
  faFileShield,
  faFileSignature,
  faFolderBlank,
  faHandPointer,
  faImages,
  faMemory,
  faColumns
);

function App() {
  return (
    <>
      <NavbarComp />
      <div className="flex">
        <PreviewArea />
        <ComponentList />
      </div>
    </>
  );
}

export default App;

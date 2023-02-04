import React from "react";
import { ContextProvider } from "./components/Context";
import PreviewArea from "./components/PreviewArea";
import ComponentList from "./components/ComponentList";
import NavbarComp from "./components/NavbarComp";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./App.css";
import {
  faAddressCard,
  faCopy,
  faFileCode,
  faFileImage,
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
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAddressCard,
  faCopy,
  faFileCode,
  faFileImage,
  faMagnifyingGlass,
  faFileInvoice,
  faFileLines,
  faTextHeight,
  faFileShield,
  faFileSignature,
  faFolderBlank,
  faHandPointer,
  faImages,
  faMemory
);

function App() {
  return (
    <ContextProvider>
      <NavbarComp />
      <div className="flex">
        <PreviewArea />
        <ComponentList />
      </div>
    </ContextProvider>
  );
}

export default App;

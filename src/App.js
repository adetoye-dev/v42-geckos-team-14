import React, { useContext } from "react";
import Context from "./components/Context";
import PreviewArea from "./components/PreviewArea";
import ComponentList from "./components/ComponentList";
import NavbarComp from "./components/NavbarComp";
import { library } from "@fortawesome/fontawesome-svg-core";
import EditTab from "./components/EditTab";
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
  faMemory
);

function App() {
  const { openEditTab } = useContext(Context);
  return (
    <>
      <NavbarComp />
      <div className="flex">
        <PreviewArea />
        {openEditTab ? <EditTab /> : <ComponentList />}
      </div>
    </>
  );
}

export default App;

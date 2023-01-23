import React, { useState } from "react";
import { ContextProvider } from "./components/Context";
// import useDragAndDrop from "./hooks/useDragAndDrop";
import PreviewArea from "./components/PreviewArea";
import ComponentList from "./components/ComponentList";
import NavbarComp from "./components/NavbarComp";
import "./App.css";

function App() {
  // const { components, selectComponent } = useDragAndDrop();

  return (
    <ContextProvider>
      <NavbarComp />
      <div className="flex">
        {/* <PreviewArea components={components} /> */}
        {/* <ComponentList onSelectComponent={selectComponent} /> */}
        <PreviewArea />
        <ComponentList />
      </div>
    </ContextProvider>
  );
}

export default App;

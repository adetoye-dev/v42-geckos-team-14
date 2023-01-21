import PreviewArea from "./components/PreviewArea";
import ComponentList from "./components/ComponentList";
import "./App.css";
import useDragAndDrop from "./hooks/useDragAndDrop";
import NavbarComp from "./components/NavbarComp";
import React, { useState } from "react";
import { ContextProvider } from "./components/Context";

function App() {
  const { components, selectComponent } = useDragAndDrop();

  return (
    <ContextProvider>
      <NavbarComp />
      <div className="flex">
        <PreviewArea components={components} />
        <ComponentList onSelectComponent={selectComponent} />
      </div>
    </ContextProvider>
  );
}

export default App;

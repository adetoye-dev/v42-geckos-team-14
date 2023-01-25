import React from "react";
import { ContextProvider } from "./components/Context";
import PreviewArea from "./components/PreviewArea";
import ComponentList from "./components/ComponentList";
import NavbarComp from "./components/NavbarComp";
import "./App.css";

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

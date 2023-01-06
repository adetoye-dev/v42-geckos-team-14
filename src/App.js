import React from "react";
import PreviewArea from "./components/PreviewArea";
import ComponentList from "./components/ComponentList";
import "./App.css";

function App() {
  return (
    <div className="flex">
      <PreviewArea />
      <ComponentList />
    </div>
  );
}

export default App;

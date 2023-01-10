import React, { useEffect } from "react";
import { useState } from 'react';
import PreviewArea from "./components/PreviewArea";
import ComponentList from "./components/ComponentList";
import "./App.css";
import useDragAndDrop from "./hooks/useDragAndDrop";

function App() {
  const {components, selectComponent} = useDragAndDrop()

  
  // function checkElementPos() {
  //   //bedzie przekazana propsem do funkcji.
  // }

  // function mouseDown() {
    
  // }

  // function mouseMove() {
    
  // }

  // function mouseUp() {
    
  // }


  return (
    <div className="flex">
      <PreviewArea components={components} />
      <ComponentList onSelectComponent={selectComponent} />
    </div>
  );
}

export default App;

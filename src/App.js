import React, { useEffect } from "react";
import { useState } from 'react';
import PreviewArea from "./components/PreviewArea";
import ComponentList from "./components/ComponentList";
import useCursorPosition from "./hooks/useCursorPosition"
import "./App.css";
import useDragAndDrop from "./hooks/useDragAndDrop";

function App() {
  // const [components, setComponents] = useState([]);

  const {components, selectComponent} = useDragAndDrop()

  useCursorPosition();
  // const [cursorPos, setCursorPos] = useState({});

  // useEffect(() => {
  //   const handleCursorMove = (event) => {
  //     setCursorPos({ left: event.clientX, top: event.clientY });
  //   };

  //   window.addEventListener('mousemove', handleCursorMove);

  //   return () => {
  //     window.removeEventListener(
  //       'mousemove',
  //       handleCursorMove
  //     );
  //   };
  // }, []);

  // function selectComponent(e) {
  //   console.log(e.target)
  //   const selectedComponent = e.target;

  //   setComponents(prev => [...prev, selectedComponent])
  // }

  // function checkElementPos() {
  //   //bedzie przekazana propsem do funkcji.
  // }

  // function mouseDown() {
    
  // }

  // function mouseMove() {
    
  // }

  // function mouseUp() {
    
  // }

  // console.log(cursorPos);

  return (
    <div className="flex">
      <PreviewArea components={components} />
      <ComponentList onSelectComponent={selectComponent} />
    </div>
  );
}

export default App;

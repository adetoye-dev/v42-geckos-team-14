import { useEffect, useState } from "react";
import useCursorPosition from "./useCursorPosition";

function useDragAndDrop() {
    const [components, setComponents] = useState([]);
    useCursorPosition();

    function selectComponent(e) {
        console.log(e.target)
        console.log('Components', components);
        const selectedComponent = e.target;

        selectedComponent.id !== "ComponentList" && setComponents(prev => [...prev, selectedComponent]);
      }

      function mouseDownHandler() {
        console.log('mousedown');
      }

      function mouseUpHandler() {
        console.log('mouseUp');
      }

      function mouseMoveHandler() {
        console.log('mouseMove');
      }

        return {components, selectComponent, mouseDownHandler, mouseUpHandler, mouseMoveHandler }
}

export default useDragAndDrop;
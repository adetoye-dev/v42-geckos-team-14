import { useContext } from "react";
import Component from "../components/Component";
import Context from "../components/Context";

function useAddComponent() {
    const { setComponents, previewAreaBoundaries } = useContext(Context);
    
    function createComponent(e) {
        const selectedComponent = e.target;
        const id = `${selectedComponent.id}${Math.random()}`;
    
        if(selectedComponent.id !== "ComponentList") {
          return (
          <Component
            class = {selectedComponent.className}
            startPosition = {{ top: previewAreaBoundaries.top, left: previewAreaBoundaries.left }}
            // startPosition={{ top: selectedComponent.offsetTop, left: selectedComponent.offsetLeft }}
            id = {id}
            key = {id}
          />
          )
        }
      }
    
      function addComponent(e) {
        const component = createComponent(e);
        
        setComponents((prev) => [...prev, component]);
      }

  return { createComponent, addComponent }
}

export default useAddComponent;

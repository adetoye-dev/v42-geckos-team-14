import { useContext } from "react";
import Component from "../components/Component";
import Context from "../components/Context";

function useAddComponent() {
  const { components, setComponents, previewAreaBoundaries } =
    useContext(Context);

  //function to calculate top offset for newly added components
  const calculateTopOffset = () => {
    //if the components array is not empty
    //set the component top offset to below the last component
    if (components.length !== 0) {
      const lastComponent = components[components.length - 1];
      const lastComponentDom = document.getElementById(lastComponent.props.id);
      return lastComponentDom.offsetHeight + lastComponentDom.offsetTop + 5;
    }
    //if no component in array, set offset to top of previewArea
    return previewAreaBoundaries.top;
  };

  function createComponent(e) {
    const selectedComponent = e.target;
    const id = `${selectedComponent.id}${Math.random()}`;
    const middleOfPreview = {
      top: calculateTopOffset(),
      left: previewAreaBoundaries.middleX - e.target.offsetWidth / 2,
    };

    if (selectedComponent.id !== "ComponentList") {
      return (
        <Component
          class={selectedComponent.className}
          startPosition={{
            top: middleOfPreview.top,
            left: middleOfPreview.left,
          }}
          // startPosition={{ top: selectedComponent.offsetTop, left: selectedComponent.offsetLeft }}
          id={id}
          key={id}
        />
      );
    }
  }

  function addComponent(e) {
    const component = createComponent(e);

    setComponents((prev) => [...prev, component]);
  }

  return { createComponent, addComponent };
}

export default useAddComponent;

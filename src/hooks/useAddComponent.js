import { useContext } from "react";
import Component from "../components/Component";
import Context from "../components/Context";
import { nanoid } from "nanoid";

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

  function createComponent(item, e) {
    const id = nanoid();
    const componentPosition = {
      top: calculateTopOffset(),
      left: 50,
    };

    return (
      <Component
        class={item.bootstrapTags}
        startPosition={{
          top: componentPosition.top,
          left: componentPosition.left,
        }}
        // startPosition={{ top: selectedComponent.offsetTop, left: selectedComponent.offsetLeft }}
        id={id}
        key={id}
      />
    );
  }

  function addComponent(item, e) {
    const component = createComponent(item, e);

    setComponents((prev) => [...prev, component]);
  }

  return { createComponent, addComponent };
}

export default useAddComponent;

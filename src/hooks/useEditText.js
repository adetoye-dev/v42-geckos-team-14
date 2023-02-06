import { useState, useContext } from "react";
import Context from "../components/Context";
import Component from "../components/Component";

const useEditText = (id) => {
  const { setOpenEditTab } = useContext(Context);
  const { components, setComponents } = useContext(Context);
  const component = components.find((item) => item.props.id === id);

  const [text, setText] = useState(component.props.text);

  const closeEditTab = () => {
    setOpenEditTab(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    setComponents((components) =>
      components.map((component) => {
        if (component.props.id === id) {
          return (
            <Component
              class={component.props.class}
              startPosition={component.props.startPosition}
              id={component.props.id}
              key={component.props.id}
              text={text}
            />
          );
        }
        return component;
      })
    );

    closeEditTab();
  };

  return {
    text,
    handleChange,
    handleSave,
  };
};

export default useEditText;

import { useState, createContext } from "react";

const Context = createContext();

export function ContextProvider(props) {
  const [components, setComponents] = useState([]);
  const [htmlCode, sethtmlCode] = useState("The code will be here");
  const [showTab, setShowTab] = useState("web");
  const [openEditTab, setOpenEditTab] = useState(true);
  const [darkLightMode, setDarkLightMode] = useState(true);
  const [previewAreaBoundaries, setPreviewAreaBoundaries] = useState({});

  return (
    <Context.Provider
      value={{
        components,
        setComponents,
        htmlCode,
        sethtmlCode,
        showTab,
        setShowTab,
        openEditTab,
        setOpenEditTab,
        darkLightMode,
        setDarkLightMode,
        previewAreaBoundaries,
        setPreviewAreaBoundaries,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Context;

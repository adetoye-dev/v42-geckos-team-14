import { useState, createContext, useEffect } from "react";

const Context = createContext();

export function ContextProvider(props) {
  const [components, setComponents] = useState([]);
  const [currentComponentId, setCurrentComponentId] = useState("");
  const [htmlCode, setHtmlCode] = useState("The code will be here");
  const [showTab, setShowTab] = useState("web");
  const [openEditTab, setOpenEditTab] = useState(false);
  const [darkLightMode, setDarkLightMode] = useState(true);
  const [previewAreaBoundaries, setPreviewAreaBoundaries] = useState({});

  useEffect(() => {
    const previewArea = document.querySelector(".previewArea");
    setHtmlCode(previewArea.innerHTML);
  }, [components]);

  return (
    <Context.Provider
      value={{
        components,
        setComponents,
        htmlCode,
        setHtmlCode,
        showTab,
        setShowTab,
        openEditTab,
        setOpenEditTab,
        currentComponentId,
        setCurrentComponentId,
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

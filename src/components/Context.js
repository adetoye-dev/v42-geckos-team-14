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
  const [htmlCodeTemplate, setHtmlCodeTemplate] = useState("");

  useEffect(() => {
    const previewArea = document.querySelector(".previewArea");
    setHtmlCode(previewArea.innerHTML);
  }, [components]);

  useEffect(() => {
    setHtmlCodeTemplate(`<!DOCTYPE html>
    <html>
        <head>
            <title>Generated HTML File</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        </head>
        <body>
          ${htmlCode}
        </body>
    </html>`);
  }, [htmlCode]);

  return (
    <Context.Provider
      value={{
        components,
        setComponents,
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
        htmlCodeTemplate,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Context;

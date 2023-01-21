import { useState, createContext } from "react";

const Context = createContext();

export function ContextProvider(props) {
  const [htmlCode, sethtmlCode] = useState("The code will be here");
  const [showTab, setShowTab] = useState("web");
  const [darkLightMode, setDarkLightMode] = useState(true);

  return (
    <Context.Provider
      value={{
        htmlCode,
        sethtmlCode,
        showTab,
        setShowTab,
        darkLightMode,
        setDarkLightMode,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Context;

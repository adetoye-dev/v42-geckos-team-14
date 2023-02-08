import { useState, useEffect, useContext } from "react";
import Context from "../components/Context";

const useResizable = (id) => {
  const { setOpenEditTab } = useContext(Context);
  const [componentWidth, setComponentWidth] = useState();
  const [componentHeight, setComponentHeight] = useState();
  const component = document.getElementById(id);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  console.log(componentWidth, width);

  const closeEditTab = () => {
    setOpenEditTab(false);
  };

  useEffect(() => {
    if (component) {
      setComponentWidth(component.offsetWidth);
      setComponentHeight(component.offsetHeight);
      setWidth(component.offsetWidth);
      setHeight(component.offsetHeight);
    }
  }, [id]);

  const handleReset = () => {
    component.style.width = `${componentWidth}px`;
    component.style.height = `${componentHeight}px`;
    setWidth(componentWidth);
    setHeight(componentHeight);
  };

  const handleSave = () => {
    setComponentWidth(width);
    setComponentHeight(height);
    closeEditTab();
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
    component.style.width = `${e.target.value}px`;
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    component.style.height = `${e.target.value}px`;
  };

  return {
    width,
    height,
    handleWidthChange,
    handleHeightChange,
    handleReset,
    handleSave,
  };
};

export default useResizable;

import { useState, useEffect, useContext } from "react";
import Context from "../components/Context";

const useResizable = (id) => {
  const [resizable, setResizable] = useState(false);
  const { setOpenEditTab } = useContext(Context);
  const [componentWidth, setComponentWidth] = useState();
  const [componentHeight, setComponentHeight] = useState();
  const component = document.getElementById(id);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  console.log(componentWidth, width);

  // const activateResize = (e) => {
  //   const { clientX, clientY } = e;
  //   setResizable(true);
  //   setComponentWidth(clientX - ref.current.offsetLeft);
  //   setComponentHeight(clientY - ref.current.offsetTop);
  // };

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

  // const onMouseMove = (e) => {
  //   const { clientX, clientY } = e;
  //   if (resizable) {
  //     let newWidth = clientX - ref.current.offsetLeft;
  //     let newHeight = clientY - ref.current.offsetTop;
  //     // check if the new size will overlap with any other element
  //     let overlapping = false;
  //     let surroundingElements = document.querySelectorAll(
  //       ".surrounding-element"
  //     );
  //     surroundingElements.forEach((el) => {
  //       if (
  //         ref.current.offsetLeft + newWidth > el.offsetLeft &&
  //         ref.current.offsetTop + newHeight > el.offsetTop &&
  //         ref.current.offsetLeft < el.offsetLeft + el.offsetWidth &&
  //         ref.current.offsetTop < el.offsetTop + el.offsetHeight
  //       ) {
  //         overlapping = true;
  //       }
  //     });
  //     // if not overlapping, set the new size
  //     if (!overlapping) {
  //       setComponentWidth(newWidth);
  //       setComponentHeight(newHeight);
  //     }
  //   }
  // };

  // const onMouseUp = (e) => {
  //   setResizable(false);
  // };

  // // Add event listeners
  // useEffect(() => {
  //   window.addEventListener("mousemove", onMouseMove);
  //   window.addEventListener("mouseup", onMouseUp);

  //   // Cleanup event listeners
  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //     window.removeEventListener("mouseup", onMouseUp);
  //   };
  // }, [resizable]);

  // return [resizable, componentWidth, componentHeight, activateResize];
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

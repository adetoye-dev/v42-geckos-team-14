import { useState, useEffect } from "react";

const useResizable = (ref) => {
  const [resizable, setResizable] = useState(false);
  const [componentWidth, setComponentWidth] = useState();
  const [componentHeight, setComponentHeight] = useState();

  const activateResize = (e) => {
    const { clientX, clientY } = e;
    setResizable(true);
    setComponentWidth(clientX - ref.current.offsetLeft);
    setComponentHeight(clientY - ref.current.offsetTop);
  };

  useEffect(() => {
    if (ref.current) {
      setComponentWidth(ref.current.offsetWidth);
      setComponentHeight(ref.current.offsetHeight);
    }
  }, [ref]);

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    if (resizable) {
      setComponentWidth(clientX - ref.current.offsetLeft);
      setComponentHeight(clientY - ref.current.offsetTop);
    }
  };

  const onMouseUp = (e) => {
    setResizable(false);
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [resizable]);

  return [resizable, componentWidth, componentHeight, activateResize];
};

export default useResizable;

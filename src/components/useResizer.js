import React, { useEffect, useRef, useState } from "react";
import "./Resizer.css";

const useResizer = (refInput) => {
  const [resizerRef, updateResizerRef] = useState(refInput);

  useEffect(() => {
    if (resizerRef) {
      const resizeableElement = resizerRef.current;

      const resizerTop = document.createElement("div");
      resizerTop.classList.add("resizer", "resizer-top");

      const resizerRight = document.createElement("div");
      resizerRight.classList.add("resizer", "resizer-right");

      const resizerBottom = document.createElement("div");
      resizerBottom.classList.add("resizer", "resizer-bottom");

      const resizerLeft = document.createElement("div");
      resizerLeft.classList.add("resizer", "resizer-left");

      resizeableElement.append(resizerTop);
      resizeableElement.append(resizerRight);
      resizeableElement.append(resizerBottom);
      resizeableElement.append(resizerLeft);

      const styles = window.getComputedStyle(resizeableElement);
      let width = parseInt(styles.width, 10);
      let height = parseInt(styles.height, 10);
      let x = 0;
      let y = 0;

      // Top resize
      const onMouseMoveTopResize = (event) => {
        const dy = event.clientY - y;
        height = height - dy;
        y = event.clientY;
        resizeableElement.style.height = `${height}px`;
      };

      const onMouseUpTopResize = () => {
        document.removeEventListener("mousemove", onMouseMoveTopResize);
      };

      const onMouseDownTopResize = (event) => {
        y = event.clientY;
        const styles = window.getComputedStyle(resizeableElement);
        resizeableElement.style.bottom = styles.bottom;
        resizeableElement.style.top = null;
        document.addEventListener("mousemove", onMouseMoveTopResize);
        document.addEventListener("mouseup", onMouseUpTopResize);
      };

      // Right resize
      const onMouseMoveRightResize = (event) => {
        const dx = event.clientX - x;
        x = event.clientX;
        width = width + dx;
        resizeableElement.style.width = `${width}px`;
      };

      const onMouseUpRightResize = () => {
        document.removeEventListener("mousemove", onMouseMoveRightResize);
      };

      const onMouseDownRightResize = (event) => {
        x = event.clientX;
        resizeableElement.style.left = styles.left;
        resizeableElement.style.right = null;
        document.addEventListener("mousemove", onMouseMoveRightResize);
        document.addEventListener("mouseup", onMouseUpRightResize);
      };

      // Bottom resize
      const onMouseMoveBottomResize = (event) => {
        const dy = event.clientY - y;
        height = height + dy;
        y = event.clientY;
        resizeableElement.style.height = `${height}px`;
      };

      const onMouseUpBottomResize = () => {
        document.removeEventListener("mousemove", onMouseMoveBottomResize);
      };

      const onMouseDownBottomResize = (event) => {
        y = event.clientY;
        const styles = window.getComputedStyle(resizeableElement);
        resizeableElement.style.top = styles.top;
        resizeableElement.style.bottom = null;
        document.addEventListener("mousemove", onMouseMoveBottomResize);
        document.addEventListener("mouseup", onMouseUpBottomResize);
      };

      // Left resize
      const onMouseMoveLeftResize = (event) => {
        const dx = event.clientX - x;
        x = event.clientX;
        width = width - dx;
        resizeableElement.style.width = `${width}px`;
      };

      const onMouseUpLeftResize = () => {
        document.removeEventListener("mousemove", onMouseMoveLeftResize);
      };

      const onMouseDownLeftResize = (event) => {
        x = event.clientX;
        resizeableElement.style.right = styles.right;
        resizeableElement.style.left = null;
        document.addEventListener("mousemove", onMouseMoveLeftResize);
        document.addEventListener("mouseup", onMouseUpLeftResize);
      };

      // Add mouse down event listener
      // const resizerRight = refRight.current;
      resizerRight.addEventListener("mousedown", onMouseDownRightResize);
      // const resizerTop = refTop.current;
      resizerTop.addEventListener("mousedown", onMouseDownTopResize);
      // const resizerBottom = refBottom.current;
      resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);
      // const resizerLeft = refLeft.current;
      resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

      return () => {
        resizeableElement.removeChild(resizerRight);
        resizeableElement.removeChild(resizerTop);
        resizeableElement.removeChild(resizerBottom);
        resizeableElement.removeChild(resizerLeft);
        resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
        resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
        resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
        resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
      };
    }
  }, [resizerRef]);

  return [updateResizerRef];
};

export default useResizer;

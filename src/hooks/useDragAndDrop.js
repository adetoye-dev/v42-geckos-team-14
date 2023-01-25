import { useEffect, useRef, useState, useContext } from "react";
import useCursorPosition from "./useCursorPosition";
import Context from "../components/Context";

function useDragAndDrop(startPosition) {
  const { previewAreaBoundaries } = useContext(Context);
  
  const currentComponentRef = useRef(null);
  const [isComponentMove, setIsComponentMove] = useState(false);
  const [componentPosition, setComponentPosition] = useState(startPosition);
  const [componentOffsetSnap, setComponentOffsetSnap] = useState(startPosition);
  const [componentOffset, setComponentOffset] = useState({});
  const { cursorPosition, cursorPosSnap, cursorDirectionY,
    cursorDirectionX } = useCursorPosition();
 

  useEffect(() => {
    window.addEventListener("mouseup", () => {
      setIsComponentMove(false);
      currentComponentRef.current = null;
    });

    return () => {
      window.removeEventListener("mouseup", () => {
        setIsComponentMove(false);
        currentComponentRef.current = null;
      });
    };
  }, []);

  useEffect(() => {
    function setStartPosition(event) {
      const top = event.target.offsetTop;
      const left = event.target.offsetLeft;

      setComponentOffsetSnap({
        top: top,
        left: left,
      });
    }

    window.addEventListener("mousedown", (event) => {
      setStartPosition(event);

      currentComponentRef.current = event.target;
    });

    return () => {
      window.removeEventListener("mousedown", (event) => {
        setStartPosition(event);
        currentComponentRef.current = event.target;
      });
    };
  }, []);

  useEffect(() => {
    function currentComponentOffset(component) {
      const top = component.offsetTop;
      const right = component.offsetLeft + component.offsetWidth;
      const bottom = component.offsetTop + component.offsetHeight;
      const left = component.offsetLeft;

      setComponentOffset({
        top: top,
        right: right,
        bottom: bottom,
        left: left,
      });
    }

    window.addEventListener("mousemove", () => {
      currentComponentRef.current &&
        currentComponentOffset(currentComponentRef.current);
    });

    return () => {
      window.removeEventListener("mousemove", () => {
        currentComponentRef.current &&
          currentComponentOffset(currentComponentRef.current);
      });
    };
  }, []);

  function cursorPosInComponent() {
    return {
      top : cursorPosition.top - (cursorPosSnap.top - componentOffsetSnap.top),
      left : cursorPosition.left - (cursorPosSnap.left - componentOffsetSnap.left)
    }
  }

  function changePosition() {
    if (limitPosInPreview(previewAreaBoundaries)) return;

    setComponentPosition( cursorPosInComponent() );
  }

  function limitPosInPreview(areaBoundaries) {
    if (
      (componentOffset.top <= areaBoundaries.top && cursorDirectionY === 'up') ||
       (componentOffset.top < areaBoundaries.top) ||
       (componentOffset.top === areaBoundaries.top && 
        cursorPosition.top - currentComponentRef.current.offsetHeight / 2  < areaBoundaries.top)
      ) {
      setComponentPosition((prev) => ( 
        {...prev, top : previewAreaBoundaries.top
      }))
      return true
    }

    if (
      (componentOffset.bottom >= areaBoundaries.bottom && cursorDirectionY === 'down') ||
      (componentOffset.bottom > areaBoundaries.bottom) ||
      (componentOffset.bottom === areaBoundaries.bottom && 
        cursorPosition.top + currentComponentRef.current.offsetHeight  > areaBoundaries.bottom)
      ) {
      setComponentPosition((prev) => ( 
        {...prev, top : (previewAreaBoundaries.bottom - currentComponentRef.current.offsetHeight)
      }))
      return true
    }

    if (
        (componentOffset.left <= areaBoundaries.left && cursorDirectionX === 'left') ||
         (componentOffset.left < areaBoundaries.left) ||
         (componentOffset.left === areaBoundaries.left && 
          cursorPosition.left - currentComponentRef.current.offsetWidth / 2 < areaBoundaries.left)
      ) {
      setComponentPosition((prev) => ( 
        {...prev, left : previewAreaBoundaries.left}
        ))
      return true
    }

    if (
      (componentOffset.right >= areaBoundaries.right && cursorDirectionX === 'right') || 
      (componentOffset.right > areaBoundaries.right) || 
      (componentOffset.right === areaBoundaries.right &&
        cursorPosition.left + currentComponentRef.current.offsetWidth / 2 > areaBoundaries.right)
       )  {
      setComponentPosition((prev) => ( 
        {...prev, left : (previewAreaBoundaries.right - currentComponentRef.current.offsetWidth)}
        ))
      return true
    }
  }

  useEffect(() => {
    startPosition && isComponentMove && changePosition();
  }, [cursorPosition]);

  return {
    isComponentMove,
    setIsComponentMove,
    componentPosition,
    setComponentPosition,
  };
}

export default useDragAndDrop;

import { useEffect, useState } from "react";
import useCursorPosition from "./useCursorPosition";

function useDragAndDrop(startPosition) {
    const [components, setComponents] = useState([]);
    const [isComponentMove, setIsComponentMove] = useState(true);
    const [componentPosition, setComponentPosition] = useState(startPosition);
    const [componentOffset, setComponentOffset] = useState(startPosition);
    const {cursorPosition, cursorPosSnap} = useCursorPosition();

    function selectComponent(e) {
        const selectedComponent = e.target;

        selectedComponent.id !== "ComponentList" && setComponents(prev => [...prev, selectedComponent]);
      };

    useEffect(() => {
        window.addEventListener('mouseup', ()=> {
            setIsComponentMove(false)});
        
        return () => {
          window.removeEventListener('mouseup', ()=> {
            setIsComponentMove(false)});
        }
      }, []);

    useEffect(() => {
      function setStartPosition(event) {
        const top = event.target.offsetTop
        const left = event.target.offsetLeft
        setComponentOffset({top: top, left: left})
      }

        window.addEventListener('mousedown', setStartPosition);
        
        return () => {
          window.removeEventListener('mousedown',setStartPosition)
        }
      }, []);

    function changePosition() {
      const top = cursorPosition.top - (cursorPosSnap.top - componentOffset.top);
      const left = cursorPosition.left - (cursorPosSnap.left - componentOffset.left);

      isComponentMove && setComponentPosition({
        top: top,
        left: left
      })
          }

    useEffect(()=>{
      startPosition && changePosition()
      },[cursorPosition]);
    
        return { components, selectComponent, isComponentMove, setIsComponentMove, componentPosition, setComponentPosition }
}

export default useDragAndDrop;
import { useEffect, useState } from "react";

function useDragAndDrop() {
    const [components, setComponents] = useState([]);

    function selectComponent(e) {
        console.log(e.target)
        const selectedComponent = e.target;
    
        setComponents(prev => [...prev, selectedComponent])
      }
      return {components, selectComponent}
}

export default useDragAndDrop;
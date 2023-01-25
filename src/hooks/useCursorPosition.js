import { useEffect, useState } from "react";

function useCursorPosition() {
  const [cursorPosition, setCursorPosition] = useState({});
  const [cursorPosSnap, setCursorPosSnap] = useState({});
  const [cursorDirectionY, setCursorDirectionY] = useState(null);
  const [cursorDirectionX, setCursorDirectionX] = useState(null);

  function checkCursorDirection(event) {
    if(event.movementX === 0 || event.movementY === 0) return;

    event.movementX > 0 ? setCursorDirectionX('right') : setCursorDirectionX('left');
    event.movementY  > 0 ? setCursorDirectionY('down') : setCursorDirectionY('up');
  }

  useEffect(() => {
    const handleCursorMove = (event) => {
      setCursorPosition({ left: event.clientX, top: event.clientY });
      checkCursorDirection(event)
    };

    window.addEventListener("mousemove", handleCursorMove);

    return () => {
      window.removeEventListener("mousemove", handleCursorMove);
    };
  }, []);

  useEffect(() => {
    const handleCursorPositionSnap = (event) => {
      setCursorPosSnap({ left: event.clientX, top: event.clientY });
    };

    window.addEventListener("mousedown", handleCursorPositionSnap);

    return () => {
      window.removeEventListener("mousedown", handleCursorPositionSnap);
    };
  }, []);

  return { cursorPosition, cursorPosSnap, cursorDirectionY,
    cursorDirectionX };
}
export default useCursorPosition;

import { useEffect, useState } from "react";

function useCursorPosition() {
    const [cursorPos, setCursorPos] = useState({});

    useEffect(() => {
        const handleCursorMove = (event) => {
        setCursorPos({ left: event.clientX, top: event.clientY });
        };

        window.addEventListener('mousemove', handleCursorMove);

        return () => {
        window.removeEventListener(
            'mousemove',
            handleCursorMove
        );
        };
    }, []);
}
export default useCursorPosition;

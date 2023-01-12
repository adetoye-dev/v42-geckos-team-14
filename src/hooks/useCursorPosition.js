import { useEffect, useState } from "react";

function useCursorPosition() {
    const [cursorPosition, setCursorPosition] = useState({});
    const [cursorPosSnap, setCursorPosSnap] = useState({});

    useEffect(() => {
        const handleCursorMove = (event) => {
        setCursorPosition({ left: event.clientX, top: event.clientY });
        };

        window.addEventListener('mousemove', handleCursorMove);

        return () => {
        window.removeEventListener(
            'mousemove',
            handleCursorMove
        );
        };
    }, []);

    useEffect(() => {
        const handleCursorPositionSnap = (event) => {
        setCursorPosSnap({ left: event.clientX, top: event.clientY });
        };

        window.addEventListener('mousedown', handleCursorPositionSnap);

        return () => {
        window.removeEventListener(
            'mousedown',
            handleCursorPositionSnap
        );
        };
    }, []);

    return {cursorPosition, cursorPosSnap}
}
export default useCursorPosition;

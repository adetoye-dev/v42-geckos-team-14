const useDraggable = () => {
  const handleDragStart = (e) => {
    console.log("drag started");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("dragging over");
  };

  const handleDragDrop = (e) => {
    console.log("item was dropped");
  };

  return { handleDragStart, handleDragOver, handleDragDrop };
};

export default useDraggable;

import useAddComponent from "./useAddComponent";

const useDraggable = () => {
  const { addComponent } = useAddComponent();

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("components", JSON.stringify(item));
    console.log("drag started");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("dragging over");
  };

  const handleDragDrop = (e) => {
    console.log("item was dropped");
    const item = e.dataTransfer.getData("components");
    console.log(JSON.parse(item));
    addComponent(JSON.parse(item));
  };

  return { handleDragStart, handleDragOver, handleDragDrop };
};

export default useDraggable;

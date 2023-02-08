import useAddComponent from "./useAddComponent";

const useDraggable = () => {
  const { addComponent } = useAddComponent();

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("components", JSON.stringify(item));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragDrop = (e) => {
    const item = e.dataTransfer.getData("components");
    addComponent(JSON.parse(item));
  };

  return { handleDragStart, handleDragOver, handleDragDrop };
};

export default useDraggable;

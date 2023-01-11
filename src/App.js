import PreviewArea from "./components/PreviewArea";
import ComponentList from "./components/ComponentList";
import "./App.css";
import useDragAndDrop from "./hooks/useDragAndDrop";

function App() {
  const {components, selectComponent} = useDragAndDrop()

  return (
    <div className="flex">
      <PreviewArea components={components} />
      <ComponentList onSelectComponent={selectComponent} />
    </div>
  );
}

export default App;

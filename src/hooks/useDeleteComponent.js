import { useContext } from "react";
import Context from "../components/Context";

function useDeleteComponent(props) {
  const { setComponents } = useContext(Context);
  // all components that we add must be added to a list with their position in the code.
  // when we delete a component, we delete it from the list
  // when we move a component, we move it inside the list


  function deleteComponent(id) {
      setComponents(components => components.filter((component) => component.props.id !== id))
    }

  return deleteComponent;
}

export default useDeleteComponent;

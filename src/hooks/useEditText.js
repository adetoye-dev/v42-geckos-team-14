import { useEffect } from "react";

const useEditText = (component) => {
  const [editTabOpen, setEditTabOpen] = useState(false);
  const [text, setText] = useState(component.text);

  const openEditTab = () => {
    setEditTabOpen(true);
  };

  const closeEditTab = () => {
    setEditTabOpen(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    component.text = text;
    closeEditTab();
  };

  useEffect(() => {
    openEditTab();
  }, []);

  return {
    editTabOpen,
    openEditTab,
    closeEditTab,
    text,
    handleChange,
    handleSave,
  };
};

export default useEditText;

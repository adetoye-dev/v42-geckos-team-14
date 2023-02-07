import { useState, useContext, useEffect } from "react";
import Context from "./Context";
import useDeleteComponent from "../hooks/useDeleteComponent";
import useEditText from "../hooks/useEditText";
import "./EditTab.css";
import useResizable from "../hooks/useResizable";

const TextTab = ({ currentComponentId }) => {
  const { text, handleChange, handleSave } = useEditText(currentComponentId);
  return (
    <>
      <h1>Text:</h1>
      <textarea
        className="edit-text"
        value={text}
        autoFocus="on"
        onChange={(e) => handleChange(e)}
      />
      <button className="save-edit-btn" onClick={handleSave}>
        Save Changes
      </button>
    </>
  );
};

const ResizeTab = ({ currentComponentId }) => {
  const {
    width,
    height,
    handleWidthChange,
    handleHeightChange,
    resetValues,
    handleSave,
  } = useResizable(currentComponentId);
  return (
    <>
      <h1>Resize:</h1>
      <div className="resize-tab">
        <h3>Width:</h3>
        <div className="resizer-inputs">
          <input
            type="range"
            name="width-percentage"
            id="width-input"
            value={width}
            onChange={(e) => handleWidthChange(e)}
            min="0"
            max="1100"
            className="resize-input-range"
          />
          <input
            className="resize-input-value"
            type="text"
            value={width}
            onChange={(e) => handleWidthChange(e)}
          />
        </div>
        <h3>Height:</h3>
        <div className="resizer-inputs">
          <input
            type="range"
            name="width-percentage"
            id="width-input"
            value={height}
            onChange={(e) => handleHeightChange(e)}
            min="0"
            max="800"
            className="resize-input-range"
          />
          <input
            type="text"
            className="resize-input-value"
            value={height}
            onChange={(e) => handleHeightChange(e)}
          />
        </div>
      </div>
      <button className="save-edit-btn" onClick={resetValues}>
        Reset
      </button>
      <button className="save-edit-btn" onClick={handleSave}>
        Save Changes
      </button>
    </>
  );
};

const DeleteTab = (props) => {
  return (
    <div className="deleteTab">
      <span>Would you like to delete this component?</span>
      <div className="delete-btns">
        <button onClick={props.onDeleteClick}>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
};

const EditTab = () => {
  const [currentTab, setCurrentTab] = useState("text");
  const { setOpenEditTab } = useContext(Context);
  const { currentComponentId } = useContext(Context);
  const deleteComponent = useDeleteComponent();

  function deleteClickHandler(id) {
    deleteComponent(id);
    setOpenEditTab(false);
  }

  return (
    <div className="editTab">
      <span className="close-tab-btn" onClick={() => setOpenEditTab(false)}>
        x
      </span>
      <div className="editTab-menu">
        <span
          className="editTab-menuItem"
          onClick={() => setCurrentTab("text")}
        >
          Edit
        </span>
        <span
          className="editTab-menuItem"
          onClick={() => setCurrentTab("resize")}
        >
          Resize
        </span>
        <span
          className="editTab-menuItem"
          onClick={() => setCurrentTab("delete")}
        >
          Delete
        </span>
      </div>
      <div className="editTab-content">
        {currentTab === "text" ? (
          <TextTab currentComponentId={currentComponentId} />
        ) : currentTab === "resize" ? (
          <ResizeTab currentComponentId={currentComponentId} />
        ) : (
          <DeleteTab
            onDeleteClick={() => deleteClickHandler(currentComponentId)}
          />
        )}
      </div>
    </div>
  );
};

export default EditTab;

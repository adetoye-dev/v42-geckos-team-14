import { useState } from "react";
import "./EditTab.css";

const TextTab = () => {
  return (
    <>
      <h1>Text:</h1>
      <input className="edit-text" value={"dsaljl;kdjlkjajlkdjkfl"} />
    </>
  );
};

const ResizeTab = () => {
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
            value="100"
            min="0"
            max="100"
            class="resize-input"
          />
          <input type="text" value={"100"} />
        </div>
        <h3>Height:</h3>
        <div className="resizer-inputs">
          <input
            type="range"
            name="width-percentage"
            id="width-input"
            value="100"
            min="0"
            max="100"
            class="resize-input"
          />
          <input type="text" value={"100"} />
        </div>
      </div>
    </>
  );
};

const DeleteTab = () => {
  return (
    <div className="deleteTab">
      Would you like to delete this component?
      <button>Yes</button>
      <button>No</button>
    </div>
  );
};

const EditTab = () => {
  const [currentTab, setCurrentTab] = useState("text");

  return (
    <div className="editTab">
      <span className="close-tab-btn">x</span>
      <div className="editTab-menu">
        <span className="editTab-menuItem">Edit</span>
        <span className="editTab-menuItem">Resize</span>
        <span className="editTab-menuItem">Delete</span>
      </div>
      <div className="editTab-content">
        {currentTab === "text" ? (
          <TextTab />
        ) : currentTab === "resize" ? (
          <ResizeTab />
        ) : (
          <DeleteTab />
        )}
      </div>
      <button className="save-edit-btn">Save Changes</button>
    </div>
  );
};

export default EditTab;

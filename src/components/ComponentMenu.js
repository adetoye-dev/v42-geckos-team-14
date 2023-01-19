import { useEffect, useState } from "react";
import "./ComponentMenu.css";
const ComponentMenu = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded((prevAttr) => !prevAttr);
  };

  useEffect(() => {
    props.onStopComponentMove(isExpanded);
  },[isExpanded])

  return (
    <div className="component-menu">
      <span onClick={toggleMenu}>click</span>
      <ul className="menu-list" data-visible={isExpanded}>
        <li className="menu-list-item">Edit</li>
        <li
          className="menu-list-item"
          onClick={() => props.onResizeClick(props.refId)}
        >
          Resize
        </li>
        <li className="menu-list-item">Delete</li>
      </ul>
    </div>
  );
};

export default ComponentMenu;

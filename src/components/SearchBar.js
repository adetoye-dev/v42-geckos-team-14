import React, { useState } from "react";

export default function SearchBar({ findComponent }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (input) => {
    setSearchInput(input);
    findComponent(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    findComponent(searchInput);
    setSearchInput("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9 search-component-button">
          <input
            type="search"
            className="form-control"
            placeholder="Search components.."
            autoFocus="on"
            value={searchInput}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <div className="col-3 search-button">
          <input type="submit" value="Search" className="btn btn-branding" />
        </div>
      </div>
    </form>
  );
}

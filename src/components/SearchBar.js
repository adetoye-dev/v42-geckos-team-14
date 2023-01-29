import React, { useContext } from "react";

export default function SearchBar() {
    return (
      <form className="search-form">
        <div className="row">
          <div className="col-9 search-component-button">
            <input
              type="search"
              className="form-control"
              placeholder="Search components.."
              autoFocus="on"
            />
          </div>
          <div className="col-3 search-button">
            <input type="submit" value="Search" className="btn btn-branding" />
          </div>
        </div>
      </form>
    );
}
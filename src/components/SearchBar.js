import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
    return (
      <form>
        <div className="row">
          <div className="col-8 city-button">
            <input
              type="search"
              placeholder="Search for..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-4 search-button">
            <input type="submit" value="Search" className="btn btn-branding" />
          </div>
        </div>
      </form>
    );
}
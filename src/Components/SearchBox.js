import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="search-box">
      <input
        className="search-input"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      />
      <i className="fas fa-search search-icon"></i>
    </div>
  );
};

export default SearchBox;

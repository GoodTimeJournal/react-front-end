import React from "react";

const SearchBar = props => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Filter Activity / Reflection Feed"
      name="searchInput"
      value={props.searchInput}
      onChange={e => props.handleChange(e)}
    />
  );
};

export default SearchBar;

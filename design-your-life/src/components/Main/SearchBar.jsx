import React from "react";

const SearchBar = props => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Filter Activities"
      name="searchInput"
      value={props.searchInput}
      onChange={e => props.handleChange(e)}
    />
  );
};
//test
export default SearchBar;

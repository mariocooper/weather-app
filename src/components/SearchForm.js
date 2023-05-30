import React from "react";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Search for a UK town or city"
        onChange={handleInputChange}
        value={searchText}
      />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;

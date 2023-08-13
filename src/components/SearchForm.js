import React from "react";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
    onSubmit();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a UK town or city"
        onChange={handleInputChange}
        value={searchText}
      />
      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;

import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { handleSearch, query } = useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Search Hacker News</h2>
      <input
        className="form-input"
        value={query}
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;

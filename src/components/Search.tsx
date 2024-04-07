import React from "react";
import { SearchProps } from "../types";
import { FaSearch } from "react-icons/fa";
import Regions from "./Regions.tsx";



const Search = ({ searchCountries, setCountries, searchInput, resetInput }: SearchProps) => {
  return (
    <article className="search-section">
      <section className="input-block">
        <FaSearch className="search-icon" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={(e) => searchCountries(e.target.value)}
        />
        <button className="delete-icon" onClick={resetInput}>X</button>
      </section>
      <Regions setCountries={setCountries} />
    </article>
  );
};

export default Search;

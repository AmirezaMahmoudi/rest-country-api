import React, { useState, useEffect, useCallback } from "react";
import Search from "../../components/Search.tsx";
import AllCountries from "./AllCountries.tsx";
import { CountriesInterface } from "../../types.ts";
import Filtered from "./Filtered.tsx";
import SearchingMessage from "../../components/Loading.tsx";

const Countries = () => {
  const url = `https://restcountries.com/v2/all`;
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [foundFilter, setFoundFilter] = useState(false);
  const [filtered, setFiltered] = useState<CountriesInterface[] | null>(null);
  const [searchInput, setSearchInput] = useState("");

  const fetchCountries = useCallback(async (): Promise<void> => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    let mounted = true;
      if (mounted) {
        fetchCountries();
      }
  
    return () => {
      mounted = false; 
    };
  }, [fetchCountries]);
  const searchCountries = (searchValue: string): void => {
    setSearchInput(searchValue);
    if (searchInput) {
        let filter: CountriesInterface[] = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFiltered(
        filter
      );

      if (filter.length === 0) {
        setFoundFilter(false);
      } else {
        setFoundFilter(true);
      }
    }
    else {
      setFiltered(countries);
    }
  };


  const resetInput = (): void => {
    return setSearchInput("");
  }
  return (
    <main>
      {isLoading ? (
       <SearchingMessage/>
      ) : (
        <>
          <Search
            searchCountries={searchCountries}
            searchInput={searchInput}
            setCountries={setCountries}
            resetInput={resetInput}
          />
          {searchInput.length > 0 ? (
            <Filtered filtered={filtered} foundFilter={foundFilter} />
          ) : (
            <AllCountries countries={countries} />
          )}
        </>
      )}
    </main>
  );
}


export default Countries;
import { useState, useEffect, useCallback } from "react";
import Search from "../../components/Search";
import AllCountries from "./AllCountries";
import Filtered from "./Filtered";
import Loading from "../../components/Loading";
import "./countries.css";

const Countries = () => {
  const url = `https://restcountries.com/v2/all`;
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [foundFilter, setFoundFilter] = useState(false);
  const [filtered, setFiltered] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const fetchCountries = useCallback(async () => {
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
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput) {
        let filter  = countries.filter((country) =>
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


  const resetInput = () => {
    return setSearchInput("");
  }
  return (
    <main>
      {isLoading ? (
       <Loading/>
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
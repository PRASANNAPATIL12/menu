import React, { useState } from 'react';
import useDebounce from 'react-use/lib/useDebounce';

const SearchBar = ({ setResults }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
   
    const debouncedQuery = useDebounce(query, 500);
   
    const handleChange = (event) => {
       setQuery(event.target.value);
    };
   
    const handleSubmit = (event) => {
       event.preventDefault();
       setResults(suggestions);
    };
   
    React.useEffect(() => {
       if (debouncedQuery) {
         // Simulate server-side query for autocomplete suggestions
         setSuggestions([`Option 1 - ${debouncedQuery}`, `Option 2 - ${debouncedQuery}`, `Option 3 - ${debouncedQuery}`]);
       } else {
         setSuggestions([]);
       }
    }, [debouncedQuery]);
   
    return (
       <form onSubmit={handleSubmit}>
         <label htmlFor="query">
           OLIVE FARMER WERTACH Q Search ingredients & dishes:
         </label>
         <input
           type="text"
           id="query"
           value={query}
           onChange={handleChange}
         />
         <input type="submit" value="Submit" />
         {suggestions.map((suggestion, index) => (
           <div key={index}>{suggestion}</div>
         ))}
       </form>
    );
   };
   
   export default SearchBar;
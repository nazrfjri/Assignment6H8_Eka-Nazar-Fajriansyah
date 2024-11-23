import React, { useState, useEffect } from 'react';

const Search = ({ onSearch, reset }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  useEffect(() => {
    if (reset) {
      setQuery('');
    }
  }, [reset]);

  return (
    <form className="flex justify-center my-4" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 w-2/3 rounded bg-zinc-200"
      />
      <button
        type="submit"
        className="ml-4 bg-orange-700 text-zinc-200 p-2 rounded hover:bg-orange-800"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

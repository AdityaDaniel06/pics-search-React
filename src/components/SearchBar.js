import { useState } from 'react';
import './SearchBar.css';
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSumbit = (event) => {
    event.preventDefault();
    onSubmit(term); // coming from app.js
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSumbit}>
        <label>Enter the Text you want to search</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;

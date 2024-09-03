import { useState } from 'react';
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
    <div>
      <form onSubmit={handleFormSumbit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;

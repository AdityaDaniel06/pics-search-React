import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    console.log("You searched for: ", term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;

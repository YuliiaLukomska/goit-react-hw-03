const SearchBox = ({ inputValue, onFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        value={inputValue}
        onChange={(event) => onFilter(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;

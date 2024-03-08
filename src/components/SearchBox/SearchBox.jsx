const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <p></p>
      <input
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;

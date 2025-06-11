const Filter = ({ search, setSearch, onlyAvailable, setOnlyAvailable, sortOrder, setSortOrder }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <label style={{ marginLeft: "10px" }}>
        <input
          type="checkbox"
          checked={onlyAvailable}
          onChange={(e) => setOnlyAvailable(e.target.checked)}
        />
        Only available
      </label>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} style={{ marginLeft: "10px" }}>
        <option value="">No sorting</option>
        <option value="asc">Price ascending</option>
        <option value="desc">Price descending</option>
      </select>
    </div>
  );
};

export default Filter;
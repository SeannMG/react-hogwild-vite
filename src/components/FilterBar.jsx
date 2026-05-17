import React from "react";
import HogForm from "./HogForm";

function FilterBar({
  showGreasedOnly,
  onGreasedChange,
  sortBy,
  onSortChange,
  onAddHog,
}) {
  return (
    <div>
      {/* GREASED FILTER (must match test exactly) */}
      <label htmlFor="greased">
        Greased Pigs Only?
      </label>
      <input
        id="greased"
        type="checkbox"
        checked={showGreasedOnly}
        onChange={onGreasedChange}
      />

      {/* SORT */}
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortBy} onChange={onSortChange}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>

      <HogForm onAddHog={onAddHog} />
    </div>
  );
}

export default FilterBar;
import { useState } from "react";
import hogsData from "../porkers_data";
import HogList from "./HogList";
import HogForm from "./HogForm";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");

  function handleHide(name) {
    const updatedHogs = hogs.filter((hog) => hog.name !== name);
    setHogs(updatedHogs);
  }

  function handleAddHog(newHog) {
    setHogs([...hogs, newHog]);
  }

  let displayedHogs = [...hogs];

  if (greasedOnly) {
    displayedHogs = displayedHogs.filter((hog) => hog.greased);
  }

  if (sortBy === "name") {
    displayedHogs.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "weight") {
    displayedHogs.sort((a, b) => a.weight - b.weight);
  }

  return (
    <div>
      <label>
        Sort by:
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>

      <label>
        Greased Pigs Only?
        <input
          type="checkbox"
          checked={greasedOnly}
          onChange={() => setGreasedOnly(!greasedOnly)}
        />
      </label>

      <HogForm onAddHog={handleAddHog} />

      <HogList hogs={displayedHogs} onHide={handleHide} />
    </div>
  );
}

export default App;
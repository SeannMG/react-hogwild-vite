import { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    setShowDetails((prev) => !prev);
  }

  return (
    <div
      className="ui card hog-card"
      aria-label="hog card"
      onClick={toggleDetails}
    >
      <h3>{hog.name}</h3>

      <img
        src={hog.image}
        alt={`Photo of ${hog.name}`}
        width="150"
      />

      {showDetails && (
        <>
          <p>Specialty: {hog.specialty}</p>
          <p>{hog.weight}</p>
          <p>{hog.greased ? "Greased" : "Nongreased"}</p>
          <p>{hog["highest medal achieved"]}</p>
        </>
      )}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation(); // prevents toggling details when hiding
          onHide(hog.name);
        }}
      >
        Hide Me
      </button>
    </div>
  );
}

export default HogCard;
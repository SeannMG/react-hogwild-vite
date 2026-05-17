import HogCard from "./HogCard";

function HogList({ hogs, onHide }) {
  return (
    <div className="hog-container">
      {hogs.map((hog) => (
        <HogCard
          key={hog.name}
          hog={hog}
          onHide={onHide}
        />
      ))}
    </div>
  );
}

export default HogList;
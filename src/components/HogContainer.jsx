import HogCard from "./HogCard";

export default function HogContainer({ hogs, hideHog }) {
  return (
    <div className="hog-container">
      {hogs.map((hog) => (
        <HogCard
          key={hog.name}
          hog={hog}
          hideHog={hideHog}
        />
      ))}
    </div>
  );
}
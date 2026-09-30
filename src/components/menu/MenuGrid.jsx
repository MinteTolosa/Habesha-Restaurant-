import MenuCard from "./MenuCard";

export default function MenuGrid({ items }) {
  // Day 2: Rendering patterns use map() to turn data into React components.
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}
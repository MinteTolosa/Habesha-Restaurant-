import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import menu from "../data/menu.json";
import MenuGrid from "../components/menu/MenuGrid";
import SectionTitle from "../components/common/SectionTitle";

const categories = [
  "All Dishes",
  "Traditional Stews & Wat",
  "Tibs & Grills",
  "Fasting & Vegan / Tsom",
  "Raw & Cured Delicacies / Kitfo",
  "Beverages & Tej",
];

export default function Menu() {
  const [category, setCategory] = useState("All Dishes");
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  // Day 3: State and events make the search and category buttons interactive.
  const filteredMenu = useMemo(() => {
    return menu.data.filter((item) => {
      const matchesCategory =
        category === "All Dishes" || item.category === category;

      const matchesSearch = item.nameEn
        .toLowerCase()
        .includes(query.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  // Day 5: useRef focus the search input without storing focus in state.
  const focusSearch = () => {
    searchRef.current?.focus();
  };

  return (
    <main className="container-page py-10">
      <SectionTitle
        eyebrow="Handcrafted Gondar & Addis spices"
        title="Our Complete Culinary Heritage"
        description="Every dish is prepared daily from scratch using sun-dried spices, stone-ground legume flours, and clarified herb butter sourced directly from highland farm cooperatives."
      />

      <div className="mt-8 flex flex-col gap-4 rounded-xl border border-line bg-white p-4 md:flex-row">
        <div className="relative flex-1">
          <Search size={17} className="absolute left-3 top-3.5 text-muted" />
          <input
            ref={searchRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dishes by name..."
            className="input-field pl-10"
          />
        </div>

        <button
          onClick={focusSearch}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-100 px-5 py-3 text-sm font-bold text-brand-800"
        >
          <SlidersHorizontal size={16} />
          Search
        </button>
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition 
              ${category === item
              ? "bg-brand-600 text-white"
              : "bg-brand-100 text-brand-800 hover:bg-brand-200"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {filteredMenu.length ? (
          <MenuGrid items={filteredMenu} />
        ) : (
          <div className="rounded-2xl bg-brand-50 p-12 text-center">
            <h2 className="font-display text-2xl font-bold">No dish found</h2>
            <p className="mt-2 text-muted">
              Try another dish name or choose another category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
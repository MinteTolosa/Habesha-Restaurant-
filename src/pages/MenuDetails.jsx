import { ArrowLeft, Heart, Minus, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import menu from "../data/menu.json";
import Button from "../components/common/Button";
import MenuCard from "../components/menu/MenuCard";
import { useCart } from "../context/CartContext";

export default function MenuDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const item = menu.data.find((entry) => entry.id === id);

  if (!item) {
    return (
      <main className="container-page grid min-h-[65vh] place-items-center py-20 text-center">
        <div>
          <p className="section-kicker">Empty Mesob</p>
          <h1 className="mt-3 font-display text-5xl font-bold">404</h1>
          <p className="mt-3 text-muted">That dish is not on today's menu.</p>
          <Button to="/menu" className="mt-6">Explore Menu</Button>
        </div>
      </main>
    );
  }

  const related = useMemo(() => menu.data.filter((entry) => 
    entry.category === item.category 
    && entry.id !== item.id).slice(0, 3),
    [item]
  );
  // Day 3: State controls quantity and click events change it.
  const increase = () => setQuantity((value) => value + 1);
  const decrease = () => setQuantity((value) => Math.max(1, value - 1));

  return (
    <main className="container-page py-8">
      <Link to="/menu" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
        <ArrowLeft size={15} />
        Menu
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div>
          <img
            src={item.image}
            alt={item.nameEn}
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
          />
          <div className="mt-5 rounded-xl bg-brand-100 p-5">
            <p className="section-kicker">Heritage & lineage</p>
            <h2 className="mt-2 font-display text-2xl font-bold">
              Royal Feast of the Highlands
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              {item.description}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white p-6 shadow-card lg:p-8">
          <div className="flex flex-wrap gap-2">
            {item.ingredients.map((tag) => (
              <span key={tag} className="rounded-full bg-brand-100 px-3 py-1 text-[0.65rem] font-bold text-brand-800">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-start justify-between gap-5">
            <div>
              <p className="text-sm font-bold text-muted">{item.category}</p>
              <h1 className="mt-1 font-display text-4xl font-bold">{item.nameEn}</h1>
            </div>
            <span className="rounded-lg bg-gold-400/20 px-3 py-2 text-xl font-bold text-gold-600">
              ETB {item.priceETB}
            </span>
          </div>

          <p className="mt-5 leading-7 text-muted">{item.description}</p>

          <div className="mt-6">
            <h3 className="font-bold">1. Heat & Spice Level</h3>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {["Mild", "Traditional", "Fiery Awaze"].map((level) => (
                <button
                  key={level}
                  className={`rounded-lg border p-3 text-left text-xs 
                    ${item.heat === level || (level === "Traditional" && item.heat === "Medium")
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-line bg-brand-50"
                  }`}
                >
                  <strong>{level}</strong>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-bold">2. Traditional Injera Base</h3>
            <div className="mt-3 rounded-lg bg-brand-50 p-4">
              <div className="flex justify-between gap-4">
                <span className="text-sm font-semibold">100% Pure Organic Brown Teff</span>
                <span className="text-xs font-bold text-green">Included</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-bold">3. Complementary Side Accents</h3>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {["Fresh Ayib", "Stewed Gomen", "House Awaze Paste", "Extra Braised Egg"].map((side) => (
                <label key={side} className="rounded-lg border border-line bg-brand-50 p-3 text-xs">
                  <input type="checkbox" className="mr-2" />
                  {side}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center justify-between rounded-lg border border-line px-3 sm:w-32">
              <button onClick={decrease}><Minus size={15} /></button>
              <span className="font-bold">{quantity}</span>
              <button onClick={increase}><Plus size={15} /></button>
            </div>

            <Button
              className="flex-1"
              onClick={() => addToCart(item, quantity)}
            >
              Add to Order · ETB {(item.priceETB * quantity).toLocaleString()}
            </Button>
          </div>

          <div className="mt-5 flex justify-between border-t border-line pt-4 text-xs text-muted">
            <span className="inline-flex items-center gap-1"><Heart size={14} /> Save to Favorites</span>
            <Link to="/cart" className="font-bold text-brand-700">View Group Mesob</Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-kicker">Gursha pairings</p>
              <h2 className="mt-2 font-display text-3xl font-bold">
                Pairs Wonderfully With {item.name}
              </h2>
            </div>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {related.map((entry) => (
              <MenuCard key={entry.id} item={entry} compact />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
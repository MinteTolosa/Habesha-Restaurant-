import specials from "../../data/specials.json";
import { useCart } from "../../context/CartContext";
import Button from "../common/Button";
import SectionTitle from "../common/SectionTitle";
import { Plus } from "lucide-react";

export default function Specials({ compact = false }) {
  const { addToCart, cart } = useCart();

  return (
    <section id="specials" className="container-page py-20">
      <SectionTitle
        eyebrow="From the clay pots"
        title="Today's Curated Chef Specials"
        description="Carefully balanced stews prepared around our signature spice blends and served piping hot with hand-stretched injera."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {specials.data.map((item) => {
          const productInCart = cart.find(
            (items) => items.id === item.id
          );

          const productQuantityLabel = productInCart
            ? `(${productInCart.quantity})`
            : "";

          return (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-line bg-white shadow-card"
            >
              <img
                src={item.image}
                alt={item.nameEn}
                className={`w-full object-cover transition duration-500 hover:scale-105 ${
                  compact ? "aspect-[4/3]" : "aspect-[1.15]"
                }`}
              />

              <div className="p-4">
                <span className="rounded-full bg-gold-400/20 px-2 py-1 text-[0.65rem] font-bold text-gold-600">
                  {item.tag}
                </span>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-bold">
                    {item.nameEn}
                  </h3>

                  <strong className="text-brand-700">
                    ETB {item.priceETB}
                  </strong>
                </div>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>

                <Button
                  className="mt-4 w-full"
                  onClick={() => addToCart(item)}
                >
                  <Plus size={15} className="mr-2" />
                  Add {productQuantityLabel}
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
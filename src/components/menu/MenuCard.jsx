import {useCartStore} from "../../store/cartStore";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "../../context/CartContext";
import Button from "../common/Button";

export default function MenuCard({ item, compact = false }) {
  // const { addToCart, cart } = useCart();
  const addToCart =useCartStore((state) =>state.addToCart);
  const cart = useCartStore((state) => state.cart);
  const productInCart = cart.find((items) => items.id === item.id);
  const productQuantityLabel = productInCart 
      ? `(${productInCart.quantity})`
      : "";
  // Day 2: Props allow the same card to render different menu objects.
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-card shadow-card">
      <Link to={`/menu/${item.id}`} className="block overflow-hidden">
        <img
          src={item.image}
          alt={item.nameEn}
          className={`w-full object-cover transition duration-500 hover:scale-105 ${compact ? "aspect-[4/3]" : "aspect-[1.15]"}`}
        />
      </Link>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.65rem] font-bold uppercase text-brand-600">
              {item.category}
            </p>
            <Link
              to={`/menu/${item.id}`}
              className="mt-1 block font-display text-xl font-bold hover:text-brand-600">
              {item.nameEn}
            </Link>
          </div>
          <span className="font-bold text-brand-700">{item.priceETB} ETB</span>
        </div>

        {!compact && (
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
            {item.description}
          </p>
        )}

        <Button
          className="mt-4 w-full"
          onClick={() => addToCart(item)}>
          <Plus size={15} className="mr-2" />
           Add {productQuantityLabel}
        </Button>
      </div>
    </article>
  );
}
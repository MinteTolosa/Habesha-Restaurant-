import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();

  const delivery = cart.length ? 158 : 0;
  const vat = Math.round(subtotal * 0.15);
  const total = subtotal + delivery + vat;

  if (!cart.length) {
    return (
      <main className="container-page grid min-h-[65vh] place-items-center py-20 text-center">
        <div>
          <p className="section-kicker">Empty Mesob</p>
          <h1 className="mt-3 font-display text-4xl font-bold">Your basket is waiting.</h1>
          <p className="mt-3 text-muted">Add a few dishes and bring the table together.</p>
          <Button to="/menu" className="mt-6">Explore Full Menu</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="container-page py-10">
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="section-kicker">Community dining</p>
          <h1 className="mt-2 font-display text-4xl font-bold">Your Gursha Basket</h1>
        </div>
        <span className="rounded-full bg-brand-100 px-4 py-2 text-xs font-bold">
          {cart.length} selections
        </span>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <section className="space-y-4">
          {cart.map((item) => (
            <article key={item.id} className="flex gap-4 rounded-xl border border-line bg-white p-4 shadow-card">
              <img src={item.image} alt={item.nameEn} className="h-24 w-24 rounded-lg object-cover" />
              <div className="min-w-0 flex-1">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase text-brand-600">{item.category}</p>
                    <h2 className="font-display text-xl font-bold">{item.nameEn}</h2>
                  </div>
                  <strong className="text-brand-700">{item.priceETB * item.quantity} ETB</strong>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4 rounded-lg border border-line px-3 py-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-700"
                  >
                    <Trash2 size={14} />
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <aside className="h-fit rounded-xl border border-line bg-white p-5 shadow-card">
          <h2 className="font-display text-2xl font-bold">Basket Ledger</h2>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between"><span>Items subtotal</span><strong>{subtotal.toLocaleString()} ETB</strong></div>
            <div className="flex justify-between"><span>Delivery</span><strong>{delivery} ETB</strong></div>
            <div className="flex justify-between"><span>VAT & Tourism Levy</span><strong>{vat} ETB</strong></div>
          </div>

          <div className="my-5 border-t border-line pt-5">
            <div className="flex justify-between">
              <span className="font-bold">Grand Total</span>
              <strong className="font-display text-2xl text-brand-700">{total.toLocaleString()} ETB</strong>
            </div>
          </div>

          <Button to="/checkout" className="w-full">
            Proceed to Delivery Checkout →
          </Button>

          <Link to="/menu" className="mt-4 block text-center text-xs font-bold text-muted">
            Explore more dishes from our Menu
          </Link>
        </aside>
      </div>
    </main>
  );
}
import { useState } from "react";
import { Check, CreditCard, MapPin, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [payment, setPayment] = useState("telebirr");

  const delivery = cart.length ? 158 : 0;
  const vat = Math.round(subtotal * 0.15);
  const total = subtotal + delivery + vat;

  // Day 3: State controls the checkout step and selected payment method.
  if (!cart.length) {
    return (
      <main className="container-page grid min-h-[65vh] place-items-center py-20 text-center">
        <div>
          <h1 className="font-display text-4xl font-bold">Nothing to check out.</h1>
          <Button to="/menu" className="mt-6">Choose Dishes</Button>
        </div>
      </main>
    );
  }

  const confirmOrder = (event) => {
    event.preventDefault();
    setStep(3);
    clearCart();
  };

  return (
    <main className="container-page py-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="section-kicker">Delivery & checkout</p>
          <h1 className="mt-2 font-display text-3xl font-bold">Complete Your Order</h1>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3">
        {["Review Order", "Delivery & Payment", "Confirmation"].map((label, index) => {
          const number = index + 1;
          const active = step >= number;
          return (
            <div key={label} className="relative text-center">
              <div className={`mx-auto grid h-9 w-9 place-items-center rounded-full text-sm font-bold ${active ? "bg-brand-600 text-white" : "bg-brand-100 text-muted"}`}>
                {active && step > number ? <Check size={15} /> : number}
              </div>
              <p className="mt-2 text-xs font-semibold">{label}</p>
            </div>
          );
        })}
      </div>

      {step === 3 ? (
        <section className="mx-auto mt-12 max-w-xl rounded-2xl bg-brand-50 p-10 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green text-white">
            <Check />
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold">Order Confirmed</h2>
          <p className="mt-3 leading-7 text-muted">
            Your Habesha-Restaurant order has been received. We will contact you before dispatch.
          </p>
          <Button to="/menu" className="mt-7">Order More Dishes</Button>
        </section>
      ) : (
        <form onSubmit={confirmOrder} className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <section className="space-y-6">
            <div className="rounded-xl border border-line bg-white p-5">
              <div className="flex items-center gap-3">
                <MapPin className="text-brand-600" size={19} />
                <div>
                  <h2 className="font-bold">1. Contact & Guest Details</h2>
                  <p className="text-xs text-muted">Habesha Hospitality</p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-semibold">
                  Recipient Name
                  <input className="input-field mt-2" placeholder="Abebe Bekele" required />
                </label>
                <label className="text-xs font-semibold">
                  Phone
                  <input className="input-field mt-2" placeholder="+251 911 234 567" required />
                </label>
                <label className="text-xs font-semibold sm:col-span-2">
                  Email for Digital Receipt
                  <input type="email" className="input-field mt-2" placeholder="abebe@example.com" />
                </label>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-white p-5">
              <div className="flex items-center gap-3">
                <MapPin className="text-brand-600" size={19} />
                <h2 className="font-bold">2. Delivery Location in Addis Ababa</h2>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-semibold">
                  Sub-city / Neighborhood
                  <input className="input-field mt-2" placeholder="Bole Medhanialem" required />
                </label>
                <label className="text-xs font-semibold">
                  Street, Building, Flat No.
                  <input className="input-field mt-2" placeholder="Behind Edna Mall, House No." required />
                </label>
                <label className="text-xs font-semibold sm:col-span-2">
                  Special Delivery Instructions
                  <textarea className="input-field mt-2 min-h-24" placeholder="Entrance through dark green gate" />
                </label>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-white p-5">
              <div className="flex items-center gap-3">
                <CreditCard className="text-brand-600" size={19} />
                <h2 className="font-bold">3. Payment Method</h2>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { id: "telebirr", label: "Telebirr Quick Merchant Pay", icon: Smartphone },
                  { id: "cbe", label: "CBE Birr / CBE Mobile Banking", icon: CreditCard },
                  { id: "cash", label: "Cash or Card on Delivery", icon: CreditCard },
                  { id: "amole", label: "Amole / Awash Birr", icon: CreditCard },
                ].map(({ id, label, icon: Icon }) => (
                  <label key={id} className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${payment === id ? "border-brand-500 bg-brand-50" : "border-line"}`}>
                    <input
                      type="radio"
                      name="payment"
                      value={id}
                      checked={payment === id}
                      onChange={(event) => setPayment(event.target.value)}
                    />
                    <Icon size={17} className="text-brand-600" />
                    <span className="text-sm font-semibold">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          <aside className="h-fit rounded-xl border border-line bg-white p-5 shadow-card">
            <h2 className="font-display text-2xl font-bold">Order Summary</h2>

            <div className="mt-5 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img src={item.image} alt={item.nameEn} className="h-14 w-14 rounded-md object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between gap-3">
                      <span className="text-sm font-semibold">{item.nameEn}</span>
                      <strong className="text-sm">{item.priceETB * item.quantity} ETB</strong>
                    </div>
                    <p className="text-xs text-muted">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3 border-t border-line pt-5 text-sm">
              <div className="flex justify-between">
                <span>Items Subtotal</span><span>{subtotal} ETB</span>
              </div>
              <div className="flex justify-between">
                <span>Express Delivery</span><span> {delivery} ETB</span>
                </div>
              <div className="flex justify-between">
                <span>VAT</span><span>{vat} ETB</span>
                </div>
            </div>

            <div className="mt-5 rounded-lg bg-brand-100 p-4">
              <p className="text-xs uppercase text-muted">Grand Total</p>
              <p className="font-display text-3xl font-bold text-brand-700">{total.toLocaleString()} ETB</p>
            </div>

            <Button type="submit" className="mt-5 w-full">
              Confirm Order & Pay {total.toLocaleString()} ETB
            </Button>
          </aside>
        </form>
      )}
    </main>
  );
}
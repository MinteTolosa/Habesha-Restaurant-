import Button from "../components/common/Button";
import menu from "../data/menu.json";
import MenuCard from "../components/menu/MenuCard";

export default function NotFound() {
  return (
    <main className="container-page py-14">
      <section className="grid min-h-[55vh] place-items-center text-center">
        <div className="max-w-xl">
          <div className="mx-auto grid h-32 w-32 place-items-center rounded-2xl bg-brand-100 text-5xl shadow-card">
            🫓
          </div>
          <p className="mt-8 text-6xl font-display font-bold text-gold-400">404</p>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
            Table not set · Error
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold">
            Looks like this dish has already been enjoyed or never made it to the kitchen!
          </h1>
          <p className="mx-auto mt-4 max-w-lg rounded-xl bg-brand-50 p-4 text-sm leading-6 text-muted">
            Even the best Gursha sometimes slips. Let&apos;s get your appetite
            back on track.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button to="/menu">Return to Today&apos;s Specials</Button>
            <Button to="/menu" variant="soft">Explore Full Menu</Button>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker">House favorites</p>
            <h2 className="mt-2 font-display text-2xl font-bold">
              Hungry? Here&apos;s What Our Guests Love Today
            </h2>
          </div>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {menu.slice(0, 3).map((item) => (
            <MenuCard key={item.id} item={item} compact />
          ))}
        </div>
      </section>
    </main>
  );
}
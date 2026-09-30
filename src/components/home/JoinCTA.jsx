import Button from "../common/Button";

export default function JoinCTA() {
  return (
    <section className="container-page py-10">
      <div className="flex flex-col justify-between gap-6 rounded-2xl bg-brand-800 p-8 text-white md:flex-row md:items-center md:p-10">
        <div>
          <p className="section-kicker text-brand-200">Join our table</p>
          <h2 className="mt-2 font-display text-3xl font-bold">
            Experience Authentic Habesha Warmth Tonight
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-brand-100">
            Whether gathering around our communal mesobs or ordering freshly baked
            injera to your home in Addis Ababa.
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-3">
          <Button to="/signup" variant="soft">Book a Habesha Table</Button>
          <Button to="/menu" variant="outline">View Complete Menu</Button>
        </div>
      </div>
    </section>
  );
}
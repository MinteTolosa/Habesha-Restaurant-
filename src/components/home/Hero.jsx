import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-brand-50">
      <div className="container-page grid min-h-[620px] items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="section-kicker">Traditional Habesha Hearth</p>

          <h1 className="mt-4 font-display text-display font-bold leading-[0.98]">
            Communal Warmth,
            <br />
            <span className="italic text-brand-600">Slow-Cooked Heritage.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted">
            Handcrafted wats, ancient stone-ground teff injera, and velvety
            kitfo simmered in 72-hour infused niter kibbeh and heirloom berbere.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button to="/menu">
              Explore Today&apos;s Specials <ArrowRight size={15} className="ml-2" />
            </Button>
            <Button to="/menu" variant="outline">
              Full Banquet Menu
            </Button>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-5">
            <div>
              <strong className="block text-brand-700">100%</strong>
              <span className="text-xs text-muted">Brown & White Teff</span>
            </div>
            <div>
              <strong className="block text-brand-700">6+ Hours</strong>
              <span className="text-xs text-muted">Slow Wat Simmer</span>
            </div>
            <div>
              <strong className="block text-brand-700">Gursha</strong>
              <span className="text-xs text-muted">Hospitality Shared</span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="overflow-hidden rounded-2xl border-8 border-brand-100 shadow-soft">
            <img
              src="./images/beyaynetu.jpg"
              alt="Traditional Ethiopian-inspired shared meal"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-5 rounded-xl bg-white p-4 shadow-soft sm:left-10">
            <p className="text-[0.65rem] font-bold uppercase text-brand-600">
              Centerpiece
            </p>
            <p className="font-display text-lg font-bold">Great Habesha Feast</p>
            <p className="font-bold text-brand-700">ETB 1,650</p>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import SectionTitle from "../common/SectionTitle";

export default function Testimonials() {
  return (
    <section className="bg-brand-50 py-20">
      <div className="container-page">
        <SectionTitle
          eyebrow="Voices around the mesob"
          title="Honored Guest Reflections"
          align="center"
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-xl bg-white p-6 shadow-card">
              <div className="flex gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 font-display text-lg italic leading-7">
                “{item.quote}”
              </p>
              <p className="mt-5 text-sm font-bold">{item.name}</p>
              <p className="text-xs text-muted">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
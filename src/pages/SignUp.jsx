import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const benefits = [
  "Welcome Gift: Pure Tej or Buna",
  "Communal Gursha Points",
  "Fasting Calendar Alerts",
  "Express Addis Delivery",
  "Priority Mesob Table Reservations",
];

export default function SignUp() {
  const [preference, setPreference] = useState("All Heritage Delicacies");

  // Day 3: State stores the selected dining preference.
  return (
    <main className="min-h-[75vh] bg-brand-50 py-8">
      <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-2xl bg-brand-100 p-7 lg:p-10">
          <p className="section-kicker">Member Circle</p>
          <h1 className="mt-4 font-display text-4xl font-bold">
            Become an Honored Table Guest
          </h1>
          <p className="mt-4 leading-7 text-muted">
            Immerse yourself in authentic highland hospitality, where every
            shared meal honors community, connection and craft.
          </p>

          <div className="mt-7 space-y-3">
            {benefits.map((benefit, index) => (
              <div key={benefit} className="rounded-lg bg-white/80 p-4">
                <p className="text-sm font-bold">{benefit}</p>
                <p className="mt-1 text-xs leading-5 text-muted">
                  Enjoy thoughtful member benefits built around Ethiopian dining traditions.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-white p-7 shadow-soft lg:p-10">
          <h2 className="font-display text-3xl font-bold">Create Your Habesha-Restaurant Account</h2>
          <p className="mt-1 text-sm text-muted">
            Join our culinary heritage circle in less than a minute.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Button variant="soft">Telebirr Quick Sign</Button>
            <Button variant="outline">Continue with Google</Button>
          </div>

          <form className="mt-6 space-y-4" onSubmit={(event) => event.preventDefault()}>
            <label className="block text-xs font-semibold">
              Full Name
              <input className="input-field mt-2" placeholder="e.g. Abebe Bekila" required />
            </label>

            <label className="block text-xs font-semibold">
              Ethiopian Mobile Number
              <input className="input-field mt-2" placeholder="+251 911 234 567" required />
            </label>

            <label className="block text-xs font-semibold">
              Email Address
              <input type="email" className="input-field mt-2" placeholder="guest@mesobhouse.com" required />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-semibold">
                Password
                <input type="password" className="input-field mt-2" placeholder="Minimum 8 characters" required />
              </label>
              <label className="block text-xs font-semibold">
                Confirm Password
                <input type="password" className="input-field mt-2" placeholder="Repeat password" required />
              </label>
            </div>

            <div>
              <p className="text-xs font-semibold">Primary Dining Preference</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  "All Heritage Delicacies",
                  "Fasting & Vegan (Tsom)",
                  "Halal Certified Meat",
                  "100% Pure Teff",
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setPreference(item)}
                    className={`rounded-full px-3 py-2 text-xs font-bold 
                      ${preference === item 
                        ? "bg-brand-600 text-white" 
                        : "bg-brand-100 text-brand-800"}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex gap-2 text-xs text-muted">
              <input type="checkbox" required />
              I agree to the Habesha-Restaurant Hospitality Terms and Privacy Guidelines.
            </label>

            <Button type="submit" className="w-full">
              Create Account & Receive Welcome Gursha →
            </Button>
          </form>

          <p className="mt-5 text-center text-sm text-muted">
            Already part of our dining family?{" "}
            <Link to="/signin" className="font-bold text-brand-700">Sign in here</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
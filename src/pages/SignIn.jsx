import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function SignIn() {
  const [method, setMethod] = useState("phone");
  const [showPassword, setShowPassword] = useState(false);
  const phoneRef = useRef(null);

  // Day 3: State controls the login method and password visibility.
  const switchToPhone = () => {
    setMethod("phone");
    phoneRef.current?.focus();
  };

  return (
    <main className="min-h-[75vh] bg-brand-50 py-10">
      <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-2xl bg-brand-100 p-7 lg:p-10">
          <p className="section-kicker">Habesha Feast Circle & Perks</p>
          <h1 className="mt-4 font-display text-4xl font-bold">
            A table shared is a bond celebrated.
          </h1>
          <p className="mt-5 leading-7 text-muted">
            Sign into your culinary sanctuary. Track your seasonal fasting
            platters, express your preferences, and summon traditional Addis
            feasts straight to your door.
          </p>

          <img
            src="../../images/beyaynetu.jpg"
            alt="Shared dining table"
            className="mt-7 aspect-[16/9] w-full rounded-xl object-cover"
          />
        </section>

        <section className="rounded-2xl bg-white p-7 shadow-soft lg:p-10">
          <p className="section-kicker">Member portal</p>
          <h2 className="mt-2 font-display text-3xl font-bold">Welcome to the Habesha-Restaurant Table</h2>
          <p className="mt-2 text-sm text-muted">Sign in to manage your guests, rewards and reserved dining Habesha-Restaurant.</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <Button variant="soft" onClick={switchToPhone}>Telebirr SuperApp →</Button>
            <Button variant="outline">Continue with Google</Button>
          </div>

          <div className="my-6 flex items-center gap-3 text-xs text-muted">
            <span className="h-px flex-1 bg-line" />
            OR WITH PHONE / EMAIL
            <span className="h-px flex-1 bg-line" />
          </div>

          <div className="flex gap-2">
            <button
              onClick={switchToPhone}
              className={`rounded-lg px-4 py-2 text-xs font-bold 
              ${method === "phone" 
                ? "bg-brand-100 text-brand-800" 
                : "bg-white"}`}
            >
              Ethiopian Mobile (+251)
            </button>
            <button
              onClick={() => setMethod("email")}
              className={`rounded-lg px-4 py-2 text-xs font-bold 
                ${method === "email" 
                  ? "bg-brand-100 text-brand-800" 
                  : "bg-white"}`}
            >
              Email Address
            </button>
          </div>

          <form className="mt-5 space-y-4" onSubmit={
            (event) => event.preventDefault()}>
            <label className="block text-xs font-semibold">
              {method === "phone" ? "Ethiopian Mobile Number" : "Email Address"}
              <input
                ref={phoneRef}
                type={method === "phone" ? "tel" : "email"}
                className="input-field mt-2"
                placeholder={method === "phone" ? "0911 234 567" : "guest@mesobhouse.com"}
                required
              />
            </label>

            <label className="block text-xs font-semibold">
              Password
              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input-field pr-24"
                  placeholder="Enter your confidential password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-3 top-3 text-xs font-bold text-brand-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            <Button type="submit" className="w-full">Sign In to Habesha-Restaurant →</Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted">
            New to our dining family?{" "}
            <Link to="/signup" className="font-bold text-brand-700">
              Join the Habesha-Restaurant Table & Register →
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
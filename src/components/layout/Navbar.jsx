import { ShoppingBag, UserRound } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";

// const links = [
//   { label: "Menu", to: "/menu" },
//   { label: "Featured Dish", to: "/menu#specials" },
//   { label: "Order & Cart", to: "/cart" },
//   { label: "Delivery & Checkout", to: "/checkout" },
// ];

export default function Navbar() {
  const { totalItems, subtotal } = useCart();
  const location = useLocation();

  // const isFeaturedDish = location.pathname === "/menu" && location.hash === "#specials";

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
      <div className="container-page flex min-h-16 items-center gap-5">

        <Link to="/" className="mr-auto">
          <span className="font-display text-xl font-bold leading-none text-brand-700">
            Habesha
            <br />
            Restaurant
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
  {/* Menu */}
  <NavLink to="/menu" end className={
    ({ isActive }) => `rounded-md px-4 py-3 text-xs font-semibold 
    ${isActive && location.hash !== "#specials"
      ? "bg-brand-600 text-white"
      : "text-ink hover:bg-brand-100"
      }`
    }
  >
    Menu
  </NavLink>
  {/* Featured Dish */}
  <Link to="/menu#specials"
    className={`rounded-md px-4 py-3 text-xs font-semibold ${
      location.pathname === "/menu" && location.hash === "#specials"
        ? "bg-brand-600 text-white"
        : "text-ink hover:bg-brand-100"
    }`} >
    Featured Dish
  </Link>

  {/* Order & Cart */}
  <NavLink to="/cart"
    className={({ isActive }) =>
      `rounded-md px-4 py-3 text-xs font-semibold ${isActive
          ? "bg-brand-600 text-white"
          : "text-ink hover:bg-brand-100"
      }`
    }>
    Order & Cart
  </NavLink>

  {/* Delivery & Checkout */}
  <NavLink to="/checkout"
    className={({ isActive }) =>
      `rounded-md px-4 py-3 text-xs font-semibold ${ isActive
          ? "bg-brand-600 text-white"
          : "text-ink hover:bg-brand-100"
      }`
    } >
    Delivery & Checkout
  </NavLink>
</nav>

  <Link to="/cart"
    className="hidden items-center gap-2 rounded-lg bg-brand-100 px-3 py-2 text-xs font-bold text-brand-800 sm:flex" >
      <ShoppingBag size={16} />
      <span>{totalItems} items</span>
      <span>{subtotal.toLocaleString()} ETB</span>
  </Link>
  <Link to="/signin"
   className="flex items-center gap-2 text-xs font-semibold" >
    <UserRound size={17} />
    <span className="hidden sm:block">Welcome, Guest</span>
  </Link>
</div>
</header>
  );
}
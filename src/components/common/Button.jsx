import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}) {
  const classes = `inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-bold transition ${variant === "primary"
    ? "bg-brand-600 text-white hover:bg-brand-700"
    : variant === "soft"
      ? "bg-brand-100 text-brand-800 hover:bg-brand-200"
      : "border border-line bg-white text-ink hover:bg-brand-50"
    } ${className}`;

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>;
  }

  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}
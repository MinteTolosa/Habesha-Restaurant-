import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("mesob-cart")) || [];
    } catch {
      return [];
    }
  });

  // Day 4: useEffect keeps the cart saved after React state changes.
  useEffect(() => {
    localStorage.setItem("mesob-cart", JSON.stringify(cart));
  }, [cart]);

  // Day 7: Context lets distant components use the same cart state.
  const addToCart = (item, quantity = 1) => {
    setCart((current) => {
      const found = current.find((entry) => entry.id === item.id);

      if (found) {
        return current.map((entry) =>
          entry.id === item.id
            ? { ...entry, quantity: entry.quantity + quantity }
            : entry
        );
      }

      return [...current, { ...item, quantity }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.priceETB * item.quantity,
    0
  );

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      totalItems,
      subtotal,
    }),
    [cart, totalItems, subtotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
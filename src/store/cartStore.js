import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist((set) => ({ cart: [],
      addToCart: (item) => set((state) => {
       const existingItem = state.cart.find(
         (cartItem) => cartItem.id === item.id );
      if (existingItem) {

       return {
         cart: state.cart.map((cartItem) =>
          cartItem.id === item.id
           ? { ...cartItem, quantity: cartItem.quantity + 1,  }
           : cartItem ),
            };
          }
       return {
         cart: [ ...state.cart, { ...item, quantity: 1,}, ],
          };
        }),
      removeFromCart: (id) => set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      increaseQuantity: (id) => set((state) => ({
          cart: state.cart.map((item) => item.id === id
            ? {
              ...item, quantity: item.quantity + 1, 
              }
            : item
          ),
        })),
      decreaseQuantity: (id) => set((state) => ({
          cart: state.cart.map((item) => item.id === id
                ? {
                    ...item, quantity: item.quantity - 1,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "habesh-restaurant-cart",
    }
  )
);
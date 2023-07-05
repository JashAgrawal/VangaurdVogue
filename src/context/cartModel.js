import { createContext, useContext, useState } from "react";

const CartModalContext = createContext();

export function CartModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const value = { open, setOpen };
  return (
    <CartModalContext.Provider value={{ open, setOpen }}>
      {children}
    </CartModalContext.Provider>
  );
}

export function useCart() {
  const { open, setOpen } = useContext(CartModalContext);
  return { open, setOpen };
}

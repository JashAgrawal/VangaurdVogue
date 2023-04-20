import { createContext, useContext, useState } from "react";

const CartModalContext = createContext();

export function CartModalProvider({ children }) {
	const [open, setOpen] = useState(true);
	const value = { open, setOpen };
	return (
		<CartModalContext.Provider value={value}>
			{children}
		</CartModalContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartModalContext);
	if (!context) {
		throw new Error("useCart must be used within CartModalProvider");
	}
	return context;
}

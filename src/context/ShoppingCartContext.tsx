import { useContext, createContext, ReactNode, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const UseShoppingCartContext = createContext({} as ShoppingCartContext);

export const ShoppingCartContext = () => {
  return useContext(UseShoppingCartContext);
};
export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  return (
    <UseShoppingCartContext.Provider value={{}}>
      {children}
    </UseShoppingCartContext.Provider>
  );
};

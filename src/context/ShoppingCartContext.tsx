import { useContext, createContext, ReactNode, useState } from "react";

//node is the type for the children property inside of react
type ShoppingCartProvideProps = {
  children: ReactNode;
};

//we only need id, adding name and other extra info is not needed
type CartItem = {
  id: number;
  quantity: number;
};
//item quantity,  increment, decrement, remove
type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

//provider gives us all the values we need
//do all the codes for rendering the shopping cart

export function ShoppingCartProvider({ children }: ShoppingCartProvideProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      // if we don't have the item in the cart, we'll add it to the cart
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        //if the item exists, increment the count
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  return (
    <ShoppingCartContext.Provider
      value={{ getItemQuantity, increaseCartQuantity }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

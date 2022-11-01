import { useContext, createContext, ReactNode } from "react";

//node is the type for the children property inside of react
type ShoppingCartProvideProps = {
  children: ReactNode;
};

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

//provider gives us all the values we need
//do all the codes for rendering the shopping cart

export function ShoppingCartProvide({ children }: ShoppingCartProvideProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

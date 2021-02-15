// createContext will be used to instantiate a new Context object
// createContext creates the container to hold our global state data
import React, { createContext, useContext } from "react";
// useContext: another React Hook that allow us to use the state created from the createContext
import { useProductReducer } from "./reducers";

// actually instantiate the global state object
// The name for a global state object is often referred to as a store
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  // state is the most up-to-date version of our global state object
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });
  // use this to confirm it works!
  console.log(state);
  // If we didn't include {...props} in our returning <Provider> component,
  // nothing on the page would be rendered!
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};
export { StoreProvider, useStoreContext };

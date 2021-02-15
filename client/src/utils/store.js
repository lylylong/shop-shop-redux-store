// import the createStore API from the Redux core library
// a store holds the whole state tree of your application
// the only way to change the state inside it is to dispatch an action on it
import { createStore } from "redux";
import reducers from "./reducers";
export default createStore(reducers);

import { createStore } from "redux";
import { Reducer, initialState } from "./reduced";

export const ConfigureStore = () =>{
    const store = createStore(
        Reducer, 
        initialState
    );
    return store
}
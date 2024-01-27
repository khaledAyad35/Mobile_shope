import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
// import ProductsSlice from "./features/productSlice"
import cartreducer, { getTotals } from './features/cartSlice';

const store = configureStore({
    reducer: {
        // products: ProductsSlice,
        cart: cartreducer,
    }
})
store.dispatch(getTotals())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}> <App /></Provider>);

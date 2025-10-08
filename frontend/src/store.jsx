// import {createStore} from 'redux'

// const reducerFunction =((state= {counter:0 },action)=>{
//     switch(action.type){
//         case 'Increase':
//             return {counter:state.counter+action.payload};
//         case 'Decrease':
//             return {counter:state.counter-action.payload};
//     }
//     return state})


// export const store = createStore(reducerFunction)

import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './Slices/apiSlice.jsx';
import authSlice from './Slices/authSlice.jsx';
export const store = configureStore({

  reducer:{
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth:authSlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

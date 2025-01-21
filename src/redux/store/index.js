import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'
import bookReducer from '../reducers/book'

// con combineReducers vogliamo RI-COMPATTARE tutte le fette (e tutti i
// reducers) dentro un unica "pizza"

const greatReducer = combineReducers({
  // inserisco qui i nomi delle "fette" con i relativi reducers per la loro
  // gestione
  cart: cartReducer,
  user: userReducer,
  book: bookReducer,
})

const store = configureStore({
  reducer: greatReducer, // qua ci va il reducer dello store di Redux
})

export default store

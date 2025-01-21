import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'

const store = configureStore({
  reducer: mainReducer, // qua ci va il reducer dello store di Redux
})

export default store

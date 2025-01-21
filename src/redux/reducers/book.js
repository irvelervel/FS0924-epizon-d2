import { GET_BOOKS_ERROR, GET_BOOKS_SUCCESS } from '../actions'

const initialState = {
  stock: [], // <-- qui dentro dovranno arrivare i libri dalla chiamata API
  error: '',
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        stock: action.payload,
      }

    case GET_BOOKS_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default bookReducer

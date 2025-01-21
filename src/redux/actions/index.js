export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USER = 'SET_USER'
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS'
export const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR'

// questo è un ACTION CREATOR
// un ACTION CREATOR è una funzione che ritorna una ACTION
export const addToCartAction = (bookSelected) => {
  return {
    type: ADD_TO_CART,
    payload: bookSelected, // il libro da aggiungere!
  }
}

// export const addToCartAction = (bookSelected) => ({
//   type: ADD_TO_CART,
//   payload: bookSelected, // il libro da aggiungere!
// })

export const removeFromCartAction = (i) => {
  return {
    type: REMOVE_FROM_CART,
    payload: i,
  }
}

export const setUserAction = (inputValue) => {
  return {
    type: SET_USER,
    payload: inputValue,
  }
}

// addToCartAction() <-- TORNA UN OGGETTO!

// una funzione freccia che ritorna solamente un valore può venire abbreviata
// eliminando le graffe del body e la parola "return"
// quando però la funzione freccia ritorna un OGGETTO, poichè togliendo le
// graffe e la parola return rimarremmo con un altro paio di graffe (quelle
// che delimitano l'oggetto), dobbiamo inserire un paio di tonde intorno alle
// graffe rimaste

// export const arrowFunction1 = () => 'CIAO' <-- ritorna una stringa
// export const arrowFunction2 = () => ['CIAO'] <-- ritorna un array
// export const arrowFunction3 = () => ({
//   stefano: true,
// }) <-- ritorna un oggetto!

// PARTE FINALE
// normalmente, in Redux è possibile solamente "dispatchare" ACTIONS
// tuttavia, per gestire eventuali operazioni asincrone e ad andare a
// riempire lo stato di Redux con dati es. provenienti da chiamate API,
// è possibile implementare il dispatch di strutture aggiuntive
// il pacchetto che abbiamo installato, @reduxjs/toolkit è di fatto
// una libreria "OPINIONATED" -> questo comporta che arriva già con un
// plugin installato: "redux-thunk"
// grazie a redux-thunk noi abbiamo già integrata la capacità di
// effettuare il dispatch di vere e proprie FUNZIONI

export const thunkActionExample = () => {
  return async (dispatch) => {
    // il contenuto di questa funzione verrà eseguito durante
    // l'operazione di DISPATCH
    // alla fine della nostra logica noi possiamo "dispatchare"
    // il risultato delle nostre operazioni tramite il metodo
    // dispatch, che ci viene fornito come parametro di questa funzione
    console.log('BLABLA')
    setTimeout(() => {
      dispatch({ type: 'CIAO' })
    }, 3000)
  }
}

export const getBooksAction = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (resp.ok) {
        let fetchedBooks = await resp.json() // array di 6 libri
        // ora ho i libri! faccio un console.log
        console.log('FETCHEDBOOKS', fetchedBooks)
        // ora però non li andrò a salvare in nessuno stato "locale",
        // ma devo spedirli al reducer per il salvataggio in REDUX
        dispatch({
          type: GET_BOOKS_SUCCESS,
          payload: fetchedBooks, // array di 6 libri
        })
      } else {
        throw new Error('Errore nel recupero libri')
      }
    } catch (error) {
      console.log(error)
      // in caso di errore dispatchiamo una action che informerà il reducer
      // che qualcosa è andato storto
      dispatch({
        type: GET_BOOKS_ERROR,
        payload: 'Errore nel recupero libri',
      })
    }
  }
}

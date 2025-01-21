export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

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

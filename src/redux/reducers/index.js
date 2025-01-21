import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions'

// qui dentro andrò a creare la funzione REDUCER del mio Redux Store
// la funzione REDUCER è fondamentale perchè è la creatrice materiale dello
// STATO dell'applicativo e delle sue successive iterazioni

const initialState = {
  // qui dentro vado a definire come sarà lo stato di Redux inizialmente!
  // qua dentro devo metterci l'array del carrello
  cart: {
    // queste "sottosezioni" in Redux vengono chiamate "slices"
    content: [],
  },
  user: {
    name: '', // <--
  },
}

// il reducer deve SEMPRE essere una funzione PURA:
// 1) dato lo stesso input, ritornerà sempre lo stesso output
// 2) NON deve contattare l'internet o fare side-effects
// 3) NON deve MAI mutare i propri parametri (eg. state, action)

const mainReducer = (state = initialState, action) => {
  // questa funzione ritornerà SEMPRE il nuovo stato dell'applicativo
  // all'inizio, quando l'app si carica per la prima volta, creiamo noi
  // "a mano" la prima BIGLIA, ovvero lo stato iniziale di Redux: lo creiamo
  // a partire da initialState, ovvero il valore di default del parametro "state"

  // in ogni reducer va implementato uno SWITCH CASE
  switch (action.type) {
    // qui andremo dopo a definire i vari "case"

    case ADD_TO_CART:
      return {
        // questo nuovo oggetto che vado a creare sarà il NUOVO
        // stato di Redux per l'applicativo!
        ...state, // mi sto portando dentro questo nuovo oggetto ("guscio")
        // tutte le proprietà dell'oggetto state
        cart: {
          ...state.cart,
          // --> DANGER <-- (non si può fare in una funzione pura!)
          // content: state.cart.content.push() // ?
          content: state.cart.content.concat(action.payload),
          // concat TORNA SEMPRE UN NUOVO ARRAY! non modifica quello esistente
          // metodo alternativo
          // content: [...state.cart.content, action.payload],
        },
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.filter((book, i) => {
            //   // devo controllare ogni book: uno di essi NON deve far parte
            //   // del nuovo array
            if (action.payload === i) {
              // ho trovato il libro da rimuovere!
              // lo filtro via
              return false
            } else {
              return true
            }
            //   // VERSIONE PRO
            // return action.payload !== i
          }),
          // metodo alternativo (delle "due fette")
          // content: [
          //   ...state.cart.content.slice(0, action.payload),
          //   ...state.cart.content.slice(action.payload + 1),
          // ],
          // },
        },
      }

    case 'SET_USER':
      return {
        ...state, // copia dentro tutto lo stato corrente
        user: {
          ...state.user,
          name: action.payload, // <-- il valore che avevo scritto nell'input
        },
      }

    default:
      // default è la casistica che avviene quando NESSUNA delle precedenti
      // viene colpita
      // cosa facciamo come default quando NON SAPPIAMO come calcolare
      // il nuovo stato dell'app?
      return state // ritorno lo stato corrente come NUOVO STATO
  }
}

export default mainReducer

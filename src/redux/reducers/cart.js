import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions'

// qui dentro andrò a creare la funzione REDUCER del mio Redux Store
// la funzione REDUCER è fondamentale perchè è la creatrice materiale dello
// STATO dell'applicativo e delle sue successive iterazioni

const initialState = {
  // qui dentro vado a definire come sarà lo stato di questo reducer inizialmente!
  content: [],
  // eventualmente altre proprietà...
}

// il reducer deve SEMPRE essere una funzione PURA:
// 1) dato lo stesso input, ritornerà sempre lo stesso output
// 2) NON deve contattare l'internet o fare side-effects
// 3) NON deve MAI mutare i propri parametri (eg. state, action)

const cartReducer = (state = initialState, action) => {
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
        // --> DANGER <-- (non si può fare in una funzione pura!)
        // content: state.content.push() // ?
        content: state.content.concat(action.payload),
        // concat TORNA SEMPRE UN NUOVO ARRAY! non modifica quello esistente
        // metodo alternativo
        // content: [...state.content, action.payload],
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        content: state.content.filter((book, i) => {
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
        //   ...state.content.slice(0, action.payload),
        //   ...state.content.slice(action.payload + 1),
        // ],
        // },
      }

    default:
      // default è la casistica che avviene quando NESSUNA delle precedenti
      // viene colpita
      // cosa facciamo come default quando NON SAPPIAMO come calcolare
      // il nuovo stato dell'app?
      return state // ritorno lo stato corrente come NUOVO STATO
  }
}

export default cartReducer

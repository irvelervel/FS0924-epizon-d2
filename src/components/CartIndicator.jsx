import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setUserAction } from '../redux/actions'

// REGOLE DEGLI HOOKS
// 1) solo nei componenti react a funzione
// 2) in cima, prima del return, fuori da funzioni, cicli e condizioni

const CartIndicator = () => {
  const navigate = useNavigate()
  const content = useSelector((state) => {
    // state è l'oggetto di stato di Redux
    // a partire da esso, noi RITORNIAMO il valore che vogliamo estrarre!
    return state.cart.content // inizialmente []
  })
  // content è l'array del carrello dallo store Redux!

  const name = useSelector((state) => state.user.name)
  // all'inizio è stringa vuota

  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('')
  // per un form, tipicamente si continuano ad utilizzare STATI LOCALI

  return (
    <div className="d-flex justify-content-end my-4">
      {name ? (
        <>
          <span className="d-flex align-items-center me-2">Ciao, {name}!</span>
          <Button
            onClick={() => navigate('/cart')}
            className="d-flex align-items-center"
          >
            <FaShoppingCart />
            <span className="ms-2">{content.length}</span>
          </Button>
        </>
      ) : (
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(setUserAction(inputValue))
          }}
        >
          <Form.Control
            type="text"
            placeholder="Fai il login"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form>
      )}
    </div>
  )
}

export default CartIndicator

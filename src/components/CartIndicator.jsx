import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

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

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/cart')}
        className="d-flex align-items-center"
      >
        <FaShoppingCart />
        <span className="ms-2">{content.length}</span>
      </Button>
    </div>
  )
}

export default CartIndicator

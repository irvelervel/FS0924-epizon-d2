import { useState, useEffect } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import BookList from './BookList'
import BookDetail from './BookDetail'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksAction } from '../redux/actions'

const BookStore = () => {
  // const [books, setBooks] = useState([]) // memorizzare i LIBRI dalle API
  const [bookSelected, setBookSelected] = useState(null)
  // serve a memorizzare su quale libro nella colonna a SX si è cliccato

  const dispatch = useDispatch()

  const booksArray = useSelector((state) => state.book.stock)
  const booksError = useSelector((state) => state.book.error)

  useEffect(() => {
    // getBooks()
    dispatch(getBooksAction())
  }, [])

  // const getBooks = async () => {
  //   try {
  //     let resp = await fetch(
  //       'https://striveschool-api.herokuapp.com/food-books'
  //     )
  //     if (resp.ok) {
  //       let fetchedBooks = await resp.json() // array di 6 libri
  //       setBooks(fetchedBooks)
  //     } else {
  //       console.log('error')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const changeBook = (book) => setBookSelected(book)

  return (
    <Row className="center-row">
      <Col lg={4}>
        {/* questo Alert comparirà solo in caso di errore della fetch! */}
        {booksError && <Alert variant="danger">{booksError}</Alert>}
        <BookList
          bookSelected={bookSelected}
          changeBook={changeBook}
          books={booksArray} // qui passo i libri ora dal Redux store!
        />
      </Col>
      <Col lg={8}>
        <BookDetail bookSelected={bookSelected} />
      </Col>
    </Row>
  )
}

export default BookStore

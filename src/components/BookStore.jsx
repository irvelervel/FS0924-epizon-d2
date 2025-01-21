import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import BookList from './BookList'
import BookDetail from './BookDetail'

const BookStore = () => {
  const [books, setBooks] = useState([]) // memorizzare i LIBRI dalle API
  const [bookSelected, setBookSelected] = useState(null)
  // serve a memorizzare su quale libro nella colonna a SX si è cliccato

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = async () => {
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (resp.ok) {
        let fetchedBooks = await resp.json() // array di 6 libri
        setBooks(fetchedBooks)
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const changeBook = (book) => setBookSelected(book)

  return (
    <Row className="center-row">
      <Col lg={4}>
        <BookList
          bookSelected={bookSelected}
          changeBook={changeBook}
          books={books}
        />
      </Col>
      <Col lg={8}>
        <BookDetail bookSelected={bookSelected} />
      </Col>
    </Row>
  )
}

export default BookStore

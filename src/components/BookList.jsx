import Book from './Book'

const BookList = ({ books, changeBook, bookSelected }) => (
  <div className="mb-3">
    {books.map((book) => (
      <Book
        key={book.id}
        book={book} // OGGETTO DEL LIBRO!
        changeBook={changeBook}
        bookSelected={bookSelected}
      />
    ))}
  </div>
)

export default BookList

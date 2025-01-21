import { useSelector } from 'react-redux'

const Footer = () => {
  const booksArray = useSelector((state) => state.book.stock)
  const booksError = useSelector((state) => state.book.error)

  return (
    <footer className="epizon-footer">
      <span className="text-muted">Epizon {new Date().getFullYear()}©</span>{' '}
      {!booksError && (
        <span>- Abbiamo {booksArray.length} libri disponibili!</span>
      )}
    </footer>
  )
}

export default Footer

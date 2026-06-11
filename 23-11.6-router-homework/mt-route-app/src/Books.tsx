import { books } from './data/books';
import { Link } from 'react-router-dom';
export default function Books() {

    let bookList = books.map((book) => {
        return (
            <li key={book.id}>
                <Link to={`/book-details/${book.id}`}>{book.title}</Link>
            </li>
        )
    })
    return (
        <div>
            <h1>Books</h1>
            <ul>
                {bookList}
            </ul>
        </div>
    )
}
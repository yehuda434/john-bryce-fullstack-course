import { useParams } from 'react-router-dom';
import { books } from './data/books';
export default function BookDetails() {
    const { id } = useParams();//{id: '2'}
    const book = books.find((book) => book.id === parseInt(id));


    if (!book) {
        return <div>Book not found</div>
    }
    return (
        <div>
            <h1>Book Details {book?.title}</h1>
            <p>Author: {book?.author}</p>
            <p>Year: {book?.year}</p>
            <p>Description: {book?.description}</p>
        </div>
    )
}
import './App.css'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Books from './Books'
import BookDetails from './BookDetails'
import NotFound from './NotFound'

function App() {

  return (
    <>
        <h1>Hello World</h1>

        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/book-details/:id" element={<BookDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App

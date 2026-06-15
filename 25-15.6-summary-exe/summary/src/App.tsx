import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Favorites from './Pages/Favorites/Favorites'
import Navbar from './Components/Navbar/Navbar'
import NotFound from './NotFound/NotFound'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Posts from "./Posts"
import Post from "./Post"
import NotFound from "./NotFound"
import Navbar from "./Navbar"
import Products from "./Products"
import Product from "./Product"
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App

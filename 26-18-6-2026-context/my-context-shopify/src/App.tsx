import { useState } from 'react';
import ProductList from './Components/ProductList';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import CartContext from './Context/CartContext';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Pages/NavBar';
function App() {

  const [items, setItems] = useState<string[]>([]);
  function addToCart(item: string) {
    setItems([...items, item]);
  }
  function removeItem(item: string) {
    setItems(items.filter((i) => i !== item));
  }
  function clearCart() {
    setItems([]);
  }
  return (
    <>
    <CartContext.Provider value={{ items, addToCart, removeItem, clearCart }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/proucts" element={<ProductList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </CartContext.Provider>
    </>
  )
}

export default App

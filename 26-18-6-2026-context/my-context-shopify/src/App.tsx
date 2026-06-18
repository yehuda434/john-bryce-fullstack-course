import CartContext from './Context/CartContext'
import { useState } from 'react';
import ProductList from './Components/ProductList';
import Navbar from './Components/Navbar';
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
      <CartContext.Provider value={{addToCart, removeItem, clearCart, items}}>
        <Navbar />
        <ProductList />
    </CartContext.Provider>
    </>
  )
}

export default App

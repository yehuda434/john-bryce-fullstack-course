import UserContext from './Context/UserContext'
import Home from './Pages/Home'
import About from './Pages/about'
import NavBar from './Pages/NavBar'
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState<string>('');
  function login() {
    setIsLoggedIn(true);
  }
  function logout() {
    setIsLoggedIn(false);
  }
  function changeName(inputName: string) {
    setName(inputName);
  }
  
  return (
    <>
      <UserContext.Provider value={{ name: name, isLoggedIn: isLoggedIn, login,logout, editName: changeName }}>
        <NavBar />
        <Home />
        <About />
    </UserContext.Provider>
    </>
  )
}

export default App

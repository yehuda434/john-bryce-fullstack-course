import UserContext from './Context/UserContext'
import Home from './Pages/Home'
import About from './Pages/about'
import NavBar from './Pages/NavBar'

function App() {

  return (
    <>
      <UserContext.Provider value={{ name: 'John', isLoggedIn: true }}>
        <NavBar />
        <Home />
        <About />
    </UserContext.Provider>
    </>
  )
}

export default App

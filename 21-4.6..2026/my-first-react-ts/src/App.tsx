import Counter from './Counter'
import ToggleButton from './ToggleButton'
import Greet from './Greet'
import ContactForm2 from './ContactForm2'
import FruitList from './FruitList'
import Fruit2 from './Fruits2'
import UserList from './UserList'
import Tovim from './Friends/Tovim'
import ColorsList from './ColorsList'
function App() {

  return (
    <>
    <ColorsList />
    <Tovim />
    <UserList />
    <FruitList />
    <Fruit2 />
    <ContactForm2 />
    <Greet firstName="John"  lastName="Doe" />
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <Counter />

    <ToggleButton />
    <ToggleButton />
    <ToggleButton />

    </>
  )
}

export default App

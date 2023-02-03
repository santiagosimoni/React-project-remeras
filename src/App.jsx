import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a RemoFoot"} />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ListPokemon from './components/ListPokemon'
import PokemonDetail from './components/PokemonDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ListPokemon/>}/>
          <Route  path='/pokemon:id'  element={<PokemonDetail/>} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App

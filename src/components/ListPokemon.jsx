import {fetchingPokemons} from '../redux/actions/actionCreators'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function ListPokemon(){
  
  const dispatch = useDispatch()
  const history = useNavigate()
  const pokemons = useSelector((store) => store.pokemons)
  const loading = useSelector((store) => store.loading)

  useEffect(() => {
    console.log('useeffect')
    if(pokemons.length < 1 ){
      dispatch(fetchingPokemons())
    }
  }, [pokemons])

  console.log(pokemons.results)
  
  //const pokemonList = pokemons.results.map(pokemon => <div><h2>{pokemon.name}</h2> <button onClick={() => history('/pokemen:id')}></button> <br /></div>)
  
  return(
    <div>
      <h1>Liste des Pokemons</h1>
      {loading ? <div>Chargement des pokemons ...</div> : 
      pokemons.results.map(pokemon => <div><h2>{pokemon.name}</h2> <button onClick={() => history('/pokemen:id')}></button> <br /></div>}
    </div>
  )
}

import { LOADING_POKEMON, FETCHED_POKEMON, FETCHED_POKEMONS, URL} from "../types";

function loadingPokemon(){
  return {type:LOADING_POKEMON}
}

function fetchedPokemon(pokemon){
  return {type: FETCHED_POKEMON, pokemon}
}

function fetchedPokemons(pokemons) {
  return { type: FETCHED_POKEMONS, pokemons }
}


function fetchingPokemons(){
  return (dispatch) => {
    dispatch(loadingPokemon())

    fetch(URL)
      .then(res => res.json())
      .then(pokemons => {
        dispatch(fetchedPokemons(pokemons))
      })
  }
}



function fetchingPokemon(id) {
  return (dispatch) => {
    dispatch(loadingPokemon())

    fetch(`${URL}${id}/`)
      .then(res => res.json())
      .then(pokemon => {
        dispatch(fetchedPokemon(pokemon))
      })
  }
}


export { fetchingPokemon, fetchingPokemons }
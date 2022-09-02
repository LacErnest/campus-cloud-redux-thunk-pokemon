import { LOADING_POKEMON, FETCHED_POKEMON, FETCHED_POKEMONS } from "../types";
import { combineReducers } from "redux";

const pokemonsReducer = (pokemons = [], action) => {
  switch(action.type){
    case FETCHED_POKEMONS:
      return action.pokemons
    case FETCHED_POKEMON:
      return action.pokemon
    default:
      return pokemons
  }
}

const loadingReducer = (loading = false, action) => {
  switch(action.type){
    case LOADING_POKEMON:
      return true
    case FETCHED_POKEMON:
      return false
    case FETCHED_POKEMONS:
      return false
    default:
      return loading
  }
}

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  loading: loadingReducer
})

export default rootReducer
import axios from 'axios'

const baseURL = 'https://pokeapi.co/api/v2/'

const PokeAPI = axios.create({
  baseURL
})

export default PokeAPI

import PokeApi from '../services/PokeAPI'

const localRoute = 'pokemon'

export const getPokemon = async (name: string) => {
  console.log(name)
  try {
    const response = await PokeApi.get(`${localRoute}/${name}`)
    return response
  } catch (err) {
    return err
  }
}

export default {
  getPokemon
}

import PokeApi from '../services/PokeAPI'

const localRoute = 'pokemon'

export const getByName = async (name: string) => {
  console.log(name)
  try {
    const response = await PokeApi.get(`${localRoute}/${name}`)
    return response
  } catch (err) {
    return err
  }
}

export const getByID = async (id: string) => {
  return await getByName(id)
}

export default {
  getByName,
  getByID
}

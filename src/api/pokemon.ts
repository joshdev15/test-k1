import PokeApi from '../services/PokeAPI'

const localRoute = 'pokemon'

const getByName = async (name: string) => {
  console.log(name)
  try {
    const response = await PokeApi.get(`${localRoute}/${name}`)
    return response
  } catch (err) {
    return err
  }
}

const getByID = async (id: string) => {
  return await getByName(id)
}

export { getByName, getByID }

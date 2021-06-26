const axios = require('axios')

const baseURL = 'https://swapi.dev/api/'

export const run = async (category: string = 'people/1') => {
  const response = await axios.get(`${baseURL}${category}`)
  return response.data
}

export const saludo = (name: string) => {
  return `Hola, mi nombre es ${name}`
}

module.exports = {
  run,
  saludo
}

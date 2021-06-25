const axios = require('axios')

const baseURL = 'https://swapi.dev/api/'

export const run = async (category: string = 'people/1') => {
  const response = await axios.get(`${baseURL}${category}`)
  return response.data
}

export const test = (text: string) => {
  return text
}

export default {
  run,
  test
}

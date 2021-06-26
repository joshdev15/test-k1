import all from '../dist/index.js'
const expectedFirstName = 'pikachu'
const expectedSecondName = 'mewtwo'

describe('Index Test', () => {
  it(`PokeApi - ${expectedFirstName}`, async () => {
    const response = (await all.Pokemon.getPokemon(expectedFirstName)).data
    const { name } = response
    expect(name).toBe(expectedFirstName)
  })

  it(`PokeApi - ${expectedSecondName}`, async () => {
    const response = (await all.Pokemon.getPokemon(expectedSecondName)).data
    const { name } = response
    expect(name).toBe(expectedSecondName)
  })

  it(`PokeApi - Intentional Error`, async () => {
    const error = await all.Pokemon.getPokemon('mmm')
    expect(error.response.status).toBe(404)
  })
})

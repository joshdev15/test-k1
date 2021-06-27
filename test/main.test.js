import { Pokemon } from '../dist/index'
const expectedFirstName = 'pikachu'
const expectedSecondName = 'mewtwo'
const expectedWithIDName = 'bulbasaur'

describe('Index Test', () => {
  it(`PokeApi - ${expectedFirstName}`, async () => {
    const response = (await Pokemon.getByName(expectedFirstName)).data
    const { name } = response
    expect(name).toBe(expectedFirstName)
  })

  it(`PokeApi - ${expectedSecondName}`, async () => {
    const response = (await Pokemon.getByName(expectedSecondName)).data
    const { name } = response
    expect(name).toBe(expectedSecondName)
  })

  it(`PokeApi - ByID (id: 1)`, async () => {
    const response = (await Pokemon.getByID('1')).data
    const { name } = response
    expect(name).toBe(expectedWithIDName)
  })

  it(`PokeApi - Intentional Error`, async () => {
    const error = await Pokemon.getByName('mmm')
    expect(error.response.status).toBe(404)
  })
})

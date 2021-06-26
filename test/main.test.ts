const all = require('../dist/index.js')

const expectedName = 'Luke Skywalker'
const myName = 'Joshua'

describe('Index Test', () => {
  it('First test', () => {
    expect(all.saludo(myName)).toBe(`Hola, mi nombre es ${myName}`)
  })

  it('Second test', async () => {
    try {
      const response = await all.run()
      const { name } = response
      expect(name).toBe(expectedName)
    } catch (e) {
      console.error(e)
    }
  })
})

const all = require('../dist/index.js')

const testText = 'Hola mundo!'
const expectedName = 'Luke Skywalker'

describe('Index Test', () => {
  it('First test', () => {
    expect(all.test(testText)).toBe(testText)
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

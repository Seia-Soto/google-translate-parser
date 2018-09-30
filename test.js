const Translate = require('./index')
const translated = new Translate({
  content: 'How to get this?',
  to: 'ko'
})

const result = translated.result()
console.log('Translated:', result)
console.log('URL:', translated.uri())

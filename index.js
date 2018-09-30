const cheerio = require('cheerio')
const request = require('request')

const base = {
  uri: 'https://translate.google.com/#',
  userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
}

const build = (options) =>{
  const built = {
    context: options.content || '',
    from: options.from || 'auto',
    to: options.to || 'en'
  }
  return built
}

module.exports = class {
  constructor(pick) {
    this.options = build(pick)
  }

  uri() {
    const uri = base.uri +
      this.options.from + '/' +
      this.options.to + '/' +
      encodeURIComponent(this.options.context)
    return uri
  }
  query() {
    const by = {
      url: this.uri(),
      headers: {
        'User-Agent': base.userAgent
      }
    }
    request(by, (error, response, body) => {
      if (error || response.statusCode !== 200) throw new Error('Error: Cannot handle or unexpected status code from server\n\n', error)
      const $ = cheerio.load(body)
      const translated = $('span#result_box').text()
      return translated
    })
  }
  result(secondary) {
    if (secondary) this.options = build(secondary)
    const data = {
      from: this.options.from,
      original: this.options.context,
      to: this.options.to,
      translated: this.query()
    }
    return data
  }
}

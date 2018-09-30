**This is an example project!**

# Google-Translate-Parser
[![license]](/LICENSE)

----

Translate words speedy with Google Translate, designed with simple HTTP client.

```js
const Translate = require('./index.js')
const translated = new Translate({
  content: 'Hello',
  from: 'auto',
  to: 'ko'
})

const result = translated.result()
console.log('Translated:', result)
```

## Installation
```
Not available on any repositories and package manager
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Translates](#only-translating)
- [API](#api)
  - [Result](#result)
  - [Query](#query)
  - [URI](#uri)

### Usage

Before you use, require and define the library and client.
```js
const Translate = require('./index.js')
const translated = new Translate() // NOTE: You can specific object which including data.
```

You can find out [ISO 639-1 Language Codes Table from Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

#### Basic-Translates

Translating your words by this library.
```js
const options = {
  content: 'What is an apple?',
  to: 'ko'
}
const translated = new Translate(options)

const result = translated.result()
console.log('Translated:', result)
```

You can also query again without defining client twice.
```js
// After the application queried once.
translated.result({
  content: 'Is this an apple?',
  to: 'ko'
})
```

### API

#### Result

Collects output data(also known as result), returns you an object.
```js
translated.result(parameter)
// NOTE: parameter is optional, if the parameter isn't defined, the client will bring you a result from latest configurations.

{
  from: 'en',
  original: 'Why?',
  to: 'ko',
  translated: '왜?'
}
```

#### Query

Collects only translated string without any objects.
```js
translated.query()
// NOTE: This method cannot identify parameter.

'왜?'
```

#### Uri

Brings you an HTTP client queried uri.
```js
translated.uri()

'https://google.translate.com/#auto/ko/Why%3F'
```

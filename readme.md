# Javascript utils

## Install

```bash
npm install @ghom/web-scrapper
```

## Usage

```javascript
import { scrap } from '@ghom/web-scrapper'

// with callback
scrap("https://www.google.com", null, (data, err) => {
    if (err) return console.error(err)
    console.log(data.window.document.querySelector("title").innerHTML)
})

// with promise
const data = await scrap("https://www.google.com")
console.log(data.window.document.querySelector("title").innerHTML)
```
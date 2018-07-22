# parsist
> Raw text parser, cleaner and formatter

## Install
```bash
npm i -s parsist
```

## Use
```js
import { parser } from 'parsist'

let raw = `
  sample  ,
, raw  .  
text *  to 
  parse
`

let delimiter = '[\\.\\,\\n\\*\\t]'

console.log(
  parser(raw, delimiter, true, '\n')
)
```

Output
```bash
sample
raw
text
to
parse
```

> Check _parsist/sample/index.js_ for specific use cases
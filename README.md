# parsist
> Raw text parser, cleaner and formatter

## Install
```bash
npm i -s parsist
```

## Docs
```js
function parser(
  raw: string,
  delimiters: string | string[],
  toString: boolean,
  separator: string
): string | string[]

Parse and clean a string of raw items based on the given regex-character delimiters

@param raw — Raw text/paragraph to parse and clean
@param delimiters — Delimiters must be valid regex characters
@param toString — Whether to get the result as a string or not (return an array of strings)
@param separator — Used as the item separator when returning a string
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

// Example 1
console.log(
  parser(raw, delimiter, true, '\n')
)

// Example 2
console.log(
  parser(raw, delimiter, true, ', ')
)
```

Outputs
```bash
sample
raw
text
to
parse
```
```bash
sample, raw, text, to, parse
```

> Check _parsist/sample/index.js_ for specific use cases
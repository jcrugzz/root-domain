# root-domain

simply returns the root-domain of any url or host that you give it

```js
var parse = require('root-domain');

console.log(parse('mail.google.com'));
// 'google.com'
```


All the hard work is done by
[`parse-domain`](https://github.com/peerigon/parse-domain).

# Masonry CoffeeScript

*A CoffeeScript compilation function with presets, for use with Masonry.*

```coffeescript
m.start [
  m.glob "*.coffee", source
  m.read
  m.tr x.coffee "web"
  m.extension ".js"
  m.write build
]
```

Provides two presets, corresponding to Babel `preset-env` targets:

- `web`, which sets `targets` to `esmodules: true`
- `node`, which sets `targets` to `node: "current"`

We no longer need to target specific browsers, since we're relying on [support for ES Modules](https://caniuse.com/mdn-javascript_statements_import).

## Install

```
npm i -D @dashkite/masonry-coffee
```


## Reference

### coffee _preset_

- _preset_ must be one of `web` or `node`

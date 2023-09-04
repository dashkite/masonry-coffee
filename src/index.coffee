import Coffee from "coffeescript"

Presets =

  node: ({ source, input }) ->
      Coffee.compile input,
        bare: true
        inlineMap: true
        filename: source?.path
        transpile:
          filename: source?.path
          plugins: [
            [ require "babel-plugin-add-import-extension", {} ]
          ]
          presets: [
            [
              require "@babel/preset-env"
              targets: node: "current"
            ]
          ]

  browser: ({ build, source, input }) ->
    do ({ mode } = build ) ->
      mode ?= "debug"
      Coffee.compile input,
        bare: true
        inlineMap: mode == "debug"
        filename: source?.path
        transpile:
          filename: source?.path
          plugins: [
            [require "babel-plugin-add-import-extension", {}]
          ]
          presets: [[
            require "@babel/preset-env"
            targets:
              "last 2 chrome versions,
                last 2 firefox versions,
                last 2 safari versions,
                last 2 ios_saf versions"
            modules: false
          ]]

coffee = ( context ) ->
  if ( preset = Presets[ context.build.preset ])?
    ( preset context )
  else
    throw new Error "masonry: unknown CoffeeScript preset #{ context.build.preset }"

export { coffee }
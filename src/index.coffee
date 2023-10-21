import Coffee from "coffeescript"
import * as swc from "@swc/core"

current = ->
  [ major ] = process.versions.node.split "."
  major

Presets =

  node: ({ source, input }) ->
    js = Coffee.compile input,
      bare: true
      inlineMap: true
      filename: if source?
        "#{ source.name }#{ source.extension }"
    { code } = await swc.transform js,
        inputSourceMap: true  
        sourceMaps: "inline" 
        jsc:
          parser:
            syntax: "ecmascript"
        module:
          type: "commonjs"
        env:
          targets:
            node: current()
    code

  browser: ({ build, source, input }) ->
    do ({ mode } = build ) ->
      mode ?= "debug"
      js = Coffee.compile input,
        bare: true
        inlineMap: mode == "debug"
        filename: source?.path
      { code } = await swc.transform js,
        filename: source?.path
        inputSourceMap: mode == "debug"
        sourceMaps: if mode == "debug" then "inline" else false
        jsc:
          parser:
            syntax: "ecmascript"
        env:
          targets: "last 2 chrome versions,
            last 2 firefox versions,
            last 2 safari versions,
            last 2 ios_saf versions"
      code

coffee = ( context ) ->
  if ( preset = Presets[ context.build.preset ])?
    ( preset context )
  else
    throw new Error "masonry: unknown CoffeeScript preset #{ context.build.preset }"

export default coffee
export { coffee }
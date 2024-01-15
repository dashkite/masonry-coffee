import Path from "node:path"
import FS from "node:fs/promises"
import Coffee from "coffeescript"
import * as swc from "@swc/core"
import { ESLint } from "eslint"
import chalk from "chalk"

linter = new ESLint
  baseConfig:
    env:
      browser: true
      node: true
    parserOptions:
      sourceType: "module"
      ecmaVersion: "latest"
    rules:
      "no-unused-vars": [
        "warn"
        argsIgnorePattern: "^_"
      ]
      "no-unreachable": "warn"
      "no-unsafe-finally": "warn"
      "no-unsafe-optional-chaining": "warn"
      "use-isnan": "warn"
      "camelcase": [
        "warn"
        allow: [
          "_interop_require_default"
          "_interop_require_wildcard"
          "_export_star"
        ]
      ]
      "complexity": "warn"
      "max-depth": "warn"
      # CS transpiler sometimes takes small functions
      # and makes them large, plus linter misreports 
      # their length ...
      # "max-lines": "warn"
      # "max-statements": "warn"
      # mixins get turned into functions by CS transpiler
      # "max-lines-per-function": "warn"
      "max-params": "warn"
      "new-cap": "warn"
      # TODO unfortunately the CS transpiler makes
      # it difficult for the linter to distinguish between
      # the use an initilization of magic numbers
      # "no-magic-numbers": [
      #   "warn"
      #   ignore: [ -2, -1, 0, 1, 2 ]
      # ]
      "no-useless-catch": "warn"
      "no-useless-call": "warn"
      "no-useless-computed-key": "warn"

current = ->
  [ major ] = process.versions.node.split "."
  major

loadModule = ->
  do ({ path, pkg } = {}) ->
    path = Path.resolve "./package.json"
    pkg = await FS.readFile path, "utf8"
    JSON.parse pkg

lint = do ({ warn, error, indent } = {}) ->
  warn = 1
  error = 2
  indent = " ".repeat 2
  newline = "\n"
  ({ code, path }) ->
    results = await linter.lintText code, filePath: path
    for { messages } in results
      if messages.length > 0
        console.warn newline, chalk.bold path
        for message in messages
          if warn == message.severity
            console.warn indent, chalk.yellow message.message
          else if error = message.severity
            console.error indent, chalk.red message.message

Presets =

  node: do ({ module } = {}) ->
    ( context ) ->
      do ({ source, input, js, code } = {}) ->
        { source, input } = context
        module ?= await do loadModule 
        js = Coffee.compile input,
          bare: true
          inlineMap: true
          filename: "/#{ module.name }/#{ source.path }"
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
        await lint { code, path: source.path }
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
      await lint { code, path: source.path }
      code

coffee = ( context ) ->
  if ( preset = Presets[ context.build.preset ])?
    ( preset context )
  else
    throw new Error "masonry: unknown CoffeeScript preset #{ context.build.preset }"

export default coffee
export { coffee }
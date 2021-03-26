import assert from "assert"
import p from "path"
import {print, test, success} from "amen"
import * as q from "panda-quill"
import * as m from "@dashkite/masonry"
import * as x from "../src"

source = p.resolve "test", "files"
build = p.resolve "test", "build"

do ->

  print await test "Masony Coffee", [

    test "compile for web", ->

      await do m.start [
        m.glob "*.coffee", source
        m.read
        m.tr x.coffee "web"
        m.extension ".js"
        m.write build
      ]

      assert.equal (await q.read p.join source, "test.js"),
        await q.read p.join build, "test.js"

  ]

  process.exit if success then 0 else 1

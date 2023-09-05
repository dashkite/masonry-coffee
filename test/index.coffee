import assert from "@dashkite/assert"
import {test, success} from "@dashkite/amen"
import print from "@dashkite/amen-console"

import coffee from "../src/"

do ->

  print await test "Masonry Coffee", [

    test "import"

  ]

  process.exit if success then 0 else 1


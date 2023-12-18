"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("coffeescript/register");
const _genie = /*#__PURE__*/ _interop_require_wildcard(require("@dashkite/genie"));
const _masonry = /*#__PURE__*/ _interop_require_wildcard(require("@dashkite/masonry"));
const _src = require("../src");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
_genie.define("clean", function() {
    return _masonry.rm("build");
});
_genie.define("build", "clean", _masonry.start([
    _masonry.glob([
        "{src,test}/**/*.coffee"
    ], "."),
    _masonry.read,
    _masonry.tr((0, _src.coffee)("node")),
    _masonry.extension(".js"),
    _masonry.write("build")
]));
_genie.define("test", function() {
    return require("../test");
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL3Rhc2tzL2luZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFBOztBQUNBLE9BQU8sQ0FBQSxLQUFQLE1BQUE7O0FBQ0EsT0FBTyxDQUFBLEtBQVAsTUFBQTs7QUFDQSxPQUFBO0VBQVEsTUFBUjtDQUFBLE1BQUE7O0FBRUEsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxPQUFULEVBQWtCLFFBQUEsQ0FBQSxDQUFBO1NBQUcsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxPQUFMO0FBQUgsQ0FBbEI7O0FBRUEsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxPQUFULEVBQWtCLE9BQWxCLEVBQTJCLENBQUMsQ0FBQyxLQUFGLENBQVEsQ0FDakMsQ0FBQyxDQUFDLElBQUYsQ0FBTyxDQUFFLHdCQUFGLENBQVAsRUFBcUMsR0FBckMsQ0FEaUMsRUFFakMsQ0FBQyxDQUFDLElBRitCLEVBR2pDLENBQUMsQ0FBQyxFQUFGLENBQUssTUFBQSxDQUFPLE1BQVAsQ0FBTCxDQUhpQyxFQUlqQyxDQUFDLENBQUMsU0FBRixDQUFZLEtBQVosQ0FKaUMsRUFLakMsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxPQUFSLENBTGlDLENBQVIsQ0FBM0I7O0FBUUEsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxNQUFULEVBQWlCLFFBQUEsQ0FBQSxDQUFBO1NBQUcsT0FBQSxDQUFRLFNBQVI7QUFBSCxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImNvZmZlZXNjcmlwdC9yZWdpc3RlclwiXG5pbXBvcnQgKiBhcyB0IGZyb20gXCJAZGFzaGtpdGUvZ2VuaWVcIlxuaW1wb3J0ICogYXMgYiBmcm9tIFwiQGRhc2hraXRlL21hc29ucnlcIlxuaW1wb3J0IHtjb2ZmZWV9IGZyb20gXCIuLi9zcmNcIlxuXG50LmRlZmluZSBcImNsZWFuXCIsIC0+IGIucm0gXCJidWlsZFwiXG5cbnQuZGVmaW5lIFwiYnVpbGRcIiwgXCJjbGVhblwiLCBiLnN0YXJ0IFtcbiAgYi5nbG9iIFsgXCJ7c3JjLHRlc3R9LyoqLyouY29mZmVlXCIgXSwgXCIuXCJcbiAgYi5yZWFkXG4gIGIudHIgY29mZmVlIFwibm9kZVwiXG4gIGIuZXh0ZW5zaW9uIFwiLmpzXCJcbiAgYi53cml0ZSBcImJ1aWxkXCJcbl1cblxudC5kZWZpbmUgXCJ0ZXN0XCIsIC0+IHJlcXVpcmUgXCIuLi90ZXN0XCJcbiJdfQ==
 //# sourceURL=/tasks/index.coffee

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90YXNrcy9pbmRleC5jb2ZmZWUiLCI8YW5vbj4iXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiY29mZmVlc2NyaXB0L3JlZ2lzdGVyXCJcbmltcG9ydCAqIGFzIHQgZnJvbSBcIkBkYXNoa2l0ZS9nZW5pZVwiXG5pbXBvcnQgKiBhcyBiIGZyb20gXCJAZGFzaGtpdGUvbWFzb25yeVwiXG5pbXBvcnQge2NvZmZlZX0gZnJvbSBcIi4uL3NyY1wiXG5cbnQuZGVmaW5lIFwiY2xlYW5cIiwgLT4gYi5ybSBcImJ1aWxkXCJcblxudC5kZWZpbmUgXCJidWlsZFwiLCBcImNsZWFuXCIsIGIuc3RhcnQgW1xuICBiLmdsb2IgWyBcIntzcmMsdGVzdH0vKiovKi5jb2ZmZWVcIiBdLCBcIi5cIlxuICBiLnJlYWRcbiAgYi50ciBjb2ZmZWUgXCJub2RlXCJcbiAgYi5leHRlbnNpb24gXCIuanNcIlxuICBiLndyaXRlIFwiYnVpbGRcIlxuXVxuXG50LmRlZmluZSBcInRlc3RcIiwgLT4gcmVxdWlyZSBcIi4uL3Rlc3RcIlxuIixudWxsXSwibmFtZXMiOlsidCIsImRlZmluZSIsImIiLCJybSIsInN0YXJ0IiwiZ2xvYiIsInJlYWQiLCJ0ciIsImNvZmZlZSIsImV4dGVuc2lvbiIsIndyaXRlIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7OztRQUFBOytEQUNBO2lFQUNBO3FCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQUEsT0FBRUMsTUFBRixDQUFTLFNBQVM7V0FBR0MsU0FBRUMsRUFBRixDQUFLO0FBQVI7QUFFbEJILE9BQUVDLE1BQUYsQ0FBUyxTQUFTLFNBQVNDLFNBQUVFLEtBQUYsQ0FBUTtJQUNqQ0YsU0FBRUcsSUFBRixDQUFPO1FBQUU7S0FBVCxFQUFxQztJQUNyQ0gsU0FBRUksSUFGK0I7SUFHakNKLFNBQUVLLEVBQUYsQ0FBS0MsSUFBQUEsV0FBQSxFQUFPO0lBQ1pOLFNBQUVPLFNBQUYsQ0FBWTtJQUNaUCxTQUFFUSxLQUFGLENBQVE7Q0FMaUI7QUFRM0JWLE9BQUVDLE1BQUYsQ0FBUyxRQUFRO1dBQUdVLFFBQVE7QUFBWCJ9
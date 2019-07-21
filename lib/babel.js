import "core-js/modules/es.symbol.description";
import "core-js/modules/es.promise";
import "core-js/modules/web.dom-collections.iterator";
import _classPrivateFieldSet from "@babel/runtime/helpers/classPrivateFieldSet";
import _classPrivateFieldGet from "@babel/runtime/helpers/classPrivateFieldGet";
import _skipFirstGeneratorNext from "@babel/runtime/helpers/skipFirstGeneratorNext";
import _toArray from "@babel/runtime/helpers/toArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _awaitAsyncGenerator from "@babel/runtime/helpers/awaitAsyncGenerator";
import _wrapAsyncGenerator from "@babel/runtime/helpers/wrapAsyncGenerator";

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

import v from "mod";
import * as ns from "mod";
import { q1x } from "mod";
import { zx as gv } from "mod";
import "mod";
export { x111 } from "mod";
export { x222 as v333 } from "mod";
export * from "mod";
import _sv from "mod";
export { _sv as sv2 };
var sv21;
export var vxx;
export default function f() {}
;
export { sv21 };
export { sv21 as v };
{
  //typeof
  const s = num;
  typeof s === 'number';
} //member-expression-literals

{
  obj["foo"] = "isValid";
  obj.const = "isKeyword";
  obj["var"] = "isKeyword";
} //property-literals

{
  var foo = {
    // changed
    "bar": function () {},
    "1": function () {},
    // not changed
    "default": 1,
    [a]: 2,
    foo: 1
  };
} //reserved-words

{
  var abstract = 1;
  var x = abstract + 1;
} //property-mutators

{
  var foo = {
    get bar() {
      return this._bar;
    },

    set bar(value) {
      this._bar = value;
    }

  };
} //arrow-functions

{
  var a1 = () => {};

  var a2 = b => b;

  const double = [1, 2, 3].map(num => num * 2);
  console.log(double); // [2,4,6]

  var bob = {
    _name: "Bob",
    _friends: ["Sally", "Tom"],

    printFriends() {
      this._friends.forEach(f => console.log(this._name + " knows " + f));
    }

  };
  console.log(bob.printFriends());
} //block-scoped-functions

{
  {
    function name(n) {
      return n;
    }
  }
  name("Steve");
} //block - scoping

{
  {
    let a = 3;
  }
  let a = 3;
} //classes

{
  class Test {
    constructor(name) {
      this.name = name;
    }

    logger() {
      console.log("Hello", this.name);
    }

  }
} //computed-properties

{
  var obj = {
    ["x" + foo]: "heh",
    ["y" + bar]: "noo",
    foo: "foo",
    bar: "bar"
  };
} //destructuring

{
  let {
    x,
    y
  } = obj;
  let [a, b, ...rest] = arr;
} //duplicate-keys

{
  var x = {
    a: 5,
    a: 6
  };
  var y = {
    get a() {},

    set a(x) {},

    a: 3
  };
} //for-of

{
  for (var i of foo) {}
} //function-name

{
  let number = x => x;
} //instanceof

{
  foo instanceof Bar;
} //literals

{
  var b = 0b11; // binary integer literal

  var o = 0o7; // octal integer literal

  const u = 'Hello\u{000A}\u{0009}!'; // unicode string literals, newline and tab
} //new-target

{
  function Foo() {
    console.log(new.target);
  }

  Foo(); // => undefined

  new Foo(); // => Foo
} //object-super

{
  let obj = {
    say() {
      return "Hello";
    }

  };
  let obj2 = {
    say() {
      return super.say() + "World!";
    }

  };
} //parameters

{
  function test(x = "hello", {
    a,
    b
  }, ...args) {
    console.log(x, a, b, args);
  }
} //shorthand-properties

{
  var o = {
    a,
    b,
    c
  };
} //spread

{
  var za = ['a', 'b', 'c'];
  var zb = [...za, 'foo'];
  var zc = foo(...za);
} //sticky-regex

{
  const a = /o+/y;
} //template-literals

{
  "foo".concat(bar);
} //typeof-symbol

{
  typeof Symbol() === "symbol";
} //unicode-regex

{
  var string = "foo💩bar";
  var match = string.match(/foo((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))bar/);
} //ES2016
//exponentiation-operator

{
  let x = 10 ** 2;
  x **= 3;
} //ES2017
//async-to-generator

{
  async function foo() {
    await bar();
  }
} //ES2018
//async-generator-functions

{
  function agf() {
    return _agf.apply(this, arguments);
  }

  function _agf() {
    _agf = _wrapAsyncGenerator(function* () {
      yield _awaitAsyncGenerator(1);
      yield 2;
    });
    return _agf.apply(this, arguments);
  }
} //dotall-regex

{
  /[\0-\uFFFF]/;
} //object-rest-spread

{
  let {
    x,
    y,
    ...z
  } = {
    x: 1,
    y: 2,
    a: 3,
    b: 4
  };
  console.log(x); // 1

  console.log(y); // 2

  console.log(z); // { a: 3, b: 4 }
} //optional-catch-binding

{
  try {
    throw 0;
  } catch {
    doSomethingWhichDoesntCareAboutTheValueThrown();
  }
} //Experimental
//class-properties

{
  class Bork {
    constructor() {
      _defineProperty(this, "instanceProperty", "bork");

      _defineProperty(this, "boundFunction", () => {
        return this.instanceProperty;
      });
    }

  }

  _defineProperty(Bork, "staticProperty", "babelIsCool");

  _defineProperty(Bork, "staticFunction", function () {
    return Bork.staticProperty;
  });

  let myBork = new Bork(); //Property initializers are not on the prototype.

  console.log(myBork.__proto__.boundFunction); // > undefined
  //Bound functions are bound to the class instance.

  console.log(myBork.boundFunction.call(undefined)); // > "bork"
  //Static function exists on the class.

  console.log(Bork.staticFunction()); // > "babelIsCool"
} //decorators

{
  let MyClass = _decorate([annotation], function (_initialize) {
    class MyClass {
      constructor() {
        _initialize(this);
      }

    }

    return {
      F: MyClass,
      d: []
    };
  });

  function annotation(target) {
    target.annotated = true;
  }
} //do-expressions

{
  let za = x > 10 ? 'big' : 'small'; // is equivalent to:

  let zza = x > 10 ? 'big' : 'small';
} //function-bind

{
  var _context;

  func.bind(obj); // is equivalent to:

  (_context = func.bind(obj), obj.func).bind(_context); // is equivalent to:

  obj.func.bind(obj);
  func.call(obj, val); // is equivalent to:

  (_context = func.call(obj, val), obj.func).call(_context, val); // is equivalent to:

  obj.func.call(obj, val);
} //function-sent

{
  function generator() {
    return _generator.apply(this, arguments);
  }

  function _generator() {
    _generator = _skipFirstGeneratorNext(function* () {
      let _functionSent = yield;

      console.log("Sent", _functionSent);
      console.log("Yield", _functionSent = yield);
    });
    return _generator.apply(this, arguments);
  }

  const iterator = generator();
  iterator.next(1); // Logs "Sent 1"

  iterator.next(2); // Logs "Yield 2"
} //logical-assignment-operators

{
  var _obj$a, _obj$a2;

  a || (a = b);
  (_obj$a = obj.a).b || (_obj$a.b = c);
  a && (a = b);
  (_obj$a2 = obj.a).b && (_obj$a2.b = c);
} //nullish-coalescing-operator

{
  var _object$foo;

  var foo = (_object$foo = object.foo) !== null && _object$foo !== void 0 ? _object$foo : "default";
} //numeric-separator

{
  let budget = 1000000000000; // What is the value of `budget`? It's 1 trillion!
  //
  // Let's confirm:

  console.log(budget === 10 ** 12); // true
} //optional-chaining

{
  var _obj$foo, _obj$foo$bar, _obj$qux, _obj$foo$bar2;

  const obj = {
    foo: {
      bar: {
        baz: 42
      }
    }
  };
  const baz = obj === null || obj === void 0 ? void 0 : (_obj$foo = obj.foo) === null || _obj$foo === void 0 ? void 0 : (_obj$foo$bar = _obj$foo.bar) === null || _obj$foo$bar === void 0 ? void 0 : _obj$foo$bar.baz; // 42

  const safe = obj === null || obj === void 0 ? void 0 : (_obj$qux = obj.qux) === null || _obj$qux === void 0 ? void 0 : _obj$qux.baz; // undefined
  // Optional chaining and normal chaining can be intermixed

  obj === null || obj === void 0 ? void 0 : (_obj$foo$bar2 = obj.foo.bar) === null || _obj$foo$bar2 === void 0 ? void 0 : _obj$foo$bar2.baz; // Only access `foo` if `obj` exists, and `baz` if
  // `bar` exists
} //pipeline-operator

{
  var _tail, _ref, _ref2, _person$score;

  const sum = nos => nos.reduce((p, c) => p + +c, 0);

  const avg = nos => sum(nos) / nos.length;

  const tail = ([_, ...tail]) => tail;

  const tailAndAverage = (_tail = tail, avg(_tail)); // valid?

  function double(x) {
    return x + x;
  }

  function add(x, y) {
    return x + y;
  }

  function boundScore(min, max, score) {
    return Math.max(min, Math.min(max, score));
  }

  let person = {
    score: 25
  };
  let newScore = (_ref = (_ref2 = (_person$score = person.score, double(_person$score)), add(7, _ref2)), boundScore(0, 100, _ref));
  newScore; //=> 57
} //throw-expressions

{
  function test(param = function (e) {
    throw e;
  }(new Error('required!'))) {
    const test = param === true || function (e) {
      throw e;
    }(new Error('Falsey!'));
  }
} //react-jsx

{
  const Hr = () => {
    return React.createElement("hr", {
      className: "hr"
    });
  };

  var profile = React.createElement("div", null, React.createElement("img", {
    src: "avatar.png",
    className: "profile"
  }), React.createElement("h3", null, [user.firstName, user.lastName].join(' ')));
  React.createElement(Sometag, null);
} //flow-strip-types

{
  function foo(one, two, three) {}
} //object-assign

{
  Object.assign(a, b);
} //object-set-prototype-of-to-assign

{
  Object.setPrototypeOf(bar, foo);
} //proto-to-assign

{
  var foo = {
    a: 1
  };
  var bar = {
    b: 2
  };
  bar.__proto__ = foo;
  bar.a; // 1

  bar.b; // 2
} //regenerator

{
  function* a() {
    yield 1;
  }
} //private-methods

{
  class Counter extends HTMLElement {
    constructor(...args) {
      super(...args);

      _clicked.add(this);

      _render.add(this);

      _x.set(this, {
        get: _get_x,
        set: _set_x
      });

      _xValue.set(this, {
        writable: true,
        value: 0
      });
    }

  }

  var _xValue = new WeakMap();

  var _x = new WeakMap();

  var _render = new WeakSet();

  var _clicked = new WeakSet();

  var _get_x = function () {
    return _classPrivateFieldGet(this, _xValue);
  };

  var _set_x = function (value) {
    _classPrivateFieldSet(this, _xValue, value);

    window.requestAnimationFrame(_classPrivateMethodGet(this, _render, _render2).bind(this));
  };

  var _render2 = function _render2() {};

  var _clicked2 = function _clicked2() {
    var _this$x;

    _classPrivateFieldSet(this, _x, (_this$x = +_classPrivateFieldGet(this, _x)) + 1), _this$x;
  };
} //partial-application

{
  var _add, _add2, _ref3, _player$score, _add3, _clamp;

  function add(x, y) {
    return x + y;
  }

  const addOne = (_add = add, function add(_argPlaceholder) {
    return _add(1, _argPlaceholder);
  }); // apply from the left

  addOne(2); // 3

  const addTen = (_add2 = add, function add(_argPlaceholder2) {
    return _add2(_argPlaceholder2, 10);
  }); // apply from the right

  addTen(2); // 12

  let newScore = (_ref3 = (_player$score = player.score, (_add3 = add, function add(_argPlaceholder3) {
    return _add3(7, _argPlaceholder3);
  })(_player$score)), (_clamp = clamp, function clamp(_argPlaceholder4) {
    return _clamp(0, 100, _argPlaceholder4);
  })(_ref3)); // shallow stack, the pipe to `clamp` is the same frame as the pipe to `add`.
}
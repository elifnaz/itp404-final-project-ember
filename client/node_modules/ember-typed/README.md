# ember-typed

This addon is a go-to solution for integration of [Typed.js](https://github.com/mattboldt/typed.js/) library into Ember.js as component.

## Installation

```
ember install ember-typed
```

## How to use
```
{{typed-string}}
```

To correctly pass array of strings, you will need to define the property on your Ember.Controller first:
```
export default Ember.Controller.extend({
  typedStrings: ["first sentence", "second sentence"]
});
```
Then pass it to component:
```
{{typed-string strings=typedStrings}}
```

### Available properties
```
// Array of strings for auto-typing
strings: ["First sentence.", "Second sentence."],
// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
stringsElement: null,
// typing speed
typeSpeed: 0,
// time before typing starts
startDelay: 0,
// backspacing speed
backSpeed: 0,
// time before backspacing
backDelay: 500,
// loop
loop: false,
// false = infinite
loopCount: false,
// show cursor
showCursor: true,
// character for cursor
cursorChar: "|",
// attribute to type (null == text)
attr: null,
// either html or text
contentType: 'html',
// call when done callback function
callback: function() {},
// starting callback function before each string
preStringTyped: function() {},
//callback for every typed string
onStringTyped: function() {},
// callback for reset
resetCallback: function() {}
```

### If you want blinking cursor...
Add this CSS to your app styles.
```
.typed-cursor {
    opacity: 1;
    -webkit-animation: blink 0.7s infinite;
    -moz-animation: blink 0.7s infinite;
    animation: blink 0.7s infinite;
}

@keyframes blink {
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}

@-webkit-keyframes blink {
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}

@-moz-keyframes blink {
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
```

## Anything else?
Please refer to the [Typed.js](https://github.com/mattboldt/typed.js/) library for docs on advanced features.

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## Credits
Thanks to [mattboldt](https://github.com/mattboldt) for such awesome library!

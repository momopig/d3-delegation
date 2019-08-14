# d3-delegation

An implementation of event delegation in d3
## Installing
`npm i --save d3-delegation`
or
`yarn add d3-delagation`

## method

### delegateEvent()
| param | description | type | default |
| --- | --- | --- | --- |
| parentSelector | A parent svg element or a string containing a selector expression to match parent svg element | Element or String | undefined |
| childSelector | A string containing a selector expression to match child svg elements | String | undefined |
| events | events Such as 'click contextmenu' | String | undefined |
| handler(event, $target) | A function to execute when the event of childDom is triggered. Return two values, $target is a d3 element ojbect | String | undefined |
| inverseHandler(event, $target) | A function to execute when the event of childDom is not triggered but the event of parentDom is triggered | String | undefined |
## usage
```
import { delegateEvent } from 'd3-delegation'
delegateEvent(this.svg, '.edge, .node', 'click contextmenu', function(event, $target) {
    event.preventDefault()
    this.contextmenu.show()
  }, function(event, $target) {
    this.contextmenu.hide()
  }
))
```

## demo

## to do
In handler, d3.event is null

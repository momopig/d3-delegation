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
| childSelector | A string containing a selector expression to match child svg elements, such as '.edge, .node' | String | undefined |
| events | Such as 'click contextmenu' | String | undefined |
| handler(event, $target) | A function to execute when the event of childDom is triggered. Return two values, $target is a d3 element ojbect | String | undefined |
| inverseHandler(event, $target) | A function to execute when the event of childDom is not triggered but the event of parentDom is triggered | String | undefined |
## usage
```
import React, { Fragment } from 'react'
import './component.scss'
import { delegateEvent } from 'd3-delegation'
class D3Delegation extends React.Component {
  componentDidMount() {
    delegateEvent(this.svg, 'rect, circle', 'click', function(event, $target) {
      window.alert($target.attr('color'))
    }, function(event, $target) {
      window.alert('click the blank area')
    })
  }
  render () {
    return (
      <div className='D3Delegation-component'>
        <svg
          ref={ svg => this.svg = svg }
        >
          <rect x="0" y="0" color="blue" width="300" height="100"  />
          <rect x="300" y="300" color="red" width="300" height="100"  />
        </svg>
      </div>
    )
  }
}

export default D3Delegation
```

## demo
[click me](https://codesandbox.io/embed/d3-delegation-vhjyv)

## to do
In handler, d3.event is null

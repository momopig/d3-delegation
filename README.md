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
| handler(event, $target) | A function to execute when the event of childDom is triggered. Return two values, $target is a d3 element ojbect | Function | undefined |
| inverseHandler(event, $target) | A function to execute when the event of childDom is not triggered but the event of parentDom is triggered | Function | undefined |
## usage
```
import React from "react";
import ReactDOM from "react-dom";
import { delegateEvent } from "d3-delegation";
import "./styles.scss";

class D3Delegation extends React.Component {
  componentDidMount() {
    delegateEvent(
      this.svg,
      "rect, circle",
      "click",
      function(event, $target) {
        window.alert("the color is:" + $target.attr("color"));
      },
      function(event, $target) {
        window.alert("the target is not a rect, you click the blank area");
      }
    );
  }
  render() {
    return (
      <div className="D3Delegation-component">
        Delegate the click event listener of rect elements to the root svg
        element.
        <br />
        Click the rect will show its color.
        <svg ref={svg => (this.svg = svg)}>
          <rect x="200" y="200" color="blue" width="100" height="100" />
          <rect x="300" y="300" color="red" width="100" height="100" />
          <circle cx="500" cy="200" r="40" color="green" stroke-width="3" />
        </svg>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<D3Delegation />, rootElement);

```

## demo
[click me](https://codesandbox.io/embed/d3-delegation-vhjyv)

## to do
In handler, d3.event is null

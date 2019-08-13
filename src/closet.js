import { selectAll } from "d3-selection";

/**
 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
 *
 * @param { String } selector A string containing a selector expression to match elements against.
 *
 * @return { Array } D3 selection

* */
export default function(selector) {
  var closestMatchDom = undefined
  var matchArr = []
  this.each(function() {
    var currentDom = this
    while(typeof currentDom.parentNode.matches === 'function' && !closestMatchDom) { // from itself
      if(currentDom.matches(selector)) {
        closestMatchDom = currentDom
        matchArr.push(closestMatchDom)
      }
      currentDom = currentDom.parentNode
    }
    closestMatchDom = undefined
  })
  return selectAll(matchArr)
}

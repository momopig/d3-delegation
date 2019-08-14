import { select, selectAll, event as d3Event, selection } from "d3-selection";
import { default as closest } from './closet';

selection.prototype.closest = closest;

/**
* DIY D3 Event Delegation
*
* @param { String } parentSelector
* @param { String } childSelector
* @param { String } events Such as 'click contextmenu'
* @param { Function } handler A function to execute when the event of childDom is triggered.
* @param { Function } inverseHandler A function to execute when the event of childDom is not triggered but the event of parentDom is triggered
*
* */

export default function (parentSelector, childSelector, events, handler, inverseHandler) {
  var $container = select(parentSelector)
  $container.on(events, function () {
    var target = d3Event.target
    var $target = select(target)
    var $currentTarget = null

    if (!$target.closest(childSelector).empty() && !$container.select(childSelector).empty()) {
      $currentTarget = $target.closest(childSelector)
    } else {
      if (inverseHandler) {
        inverseHandler.call(null, d3Event, $target)
      }
      return
    }
    handler.call(null, d3Event, $currentTarget)
  })
};

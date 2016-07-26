/**
 * Feature Fill for finding the DOM node  closest element for a `selector`.
 *
 * @param {element} dom node
 * @param {selector} selector
 * @return {Element} el
 */
import matches from './element-matches';

function closest(element, selector) {
    if (typeof Element.prototype.closest !== 'function') {

        while (element && element.nodeType === 1) {
            if (matches(element, selector)) {
                return element;
            }
            element = element.parentNode;
        }

        return null;
    }
    return element.closest(selector)
}

export default closest;
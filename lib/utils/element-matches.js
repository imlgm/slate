/**
 * Feature Fill for finding the DOM node  closest element for a `selector`.
 *
 * @param {element} dom node
 * @param {selector} selector
 * @return {Element} el
 */

function matches(element, selector) {
    var _matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector;
    if (typeof _matches !== 'function') {
        var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
        var index = 0;
        while (elements[index] && elements[index] !== element) {
            ++index;
        }
        return Boolean(elements[index]);
    }
    return _matches.call(element, selector);
}

export default matches;
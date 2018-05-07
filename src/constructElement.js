import React from 'react';
import injectCss from './css/injectCss';

const constructElement = (element, css, injectFunctions = [], classNames = []) => {
  css[0] = css[0].map((el, index) => (css.length > (index + 1) && typeof css[index + 1] === 'string' && el + css[index + 1]) || el).join('');
  injectFunctions = [...injectFunctions, ...css.filter(f => typeof f === 'function')];
  classNames = Array.isArray(css) && [...classNames, injectCss(css[0])];
  let res = (classNames.length > 0 && ((props) => {
    let classes = [...classNames, ...injectFunctions.map(f => f(props))];
    return element({ ...props, className: `${classes.join(' ')} ${props.className || ''}` });
  })) || element(css);
  res.extend = (...css) => constructElement(element, css, injectFunctions, classNames);
  return res;
}

export default (tag) => (...css) => constructElement((props) => React.createElement(tag, props), css);
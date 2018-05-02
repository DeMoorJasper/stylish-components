import React from 'react';
import injectCss from './css/injectCss';

const constructElement = (element, css, injectFunctions, classNames = []) => {
  classNames = Array.isArray(css) && [...classNames, injectCss(css[0])];
  let res = (classNames.length > 0 && ((props) => {
    let classes = [...classNames, ...injectFunctions.map(f => f(props))]
    return element({...props, className: `${classes.join(' ')} ${props.className || ''}`})
  })) || element(css);
  res.extend = (css) => constructElement(element, css, injectFunctions, classNames)
  return res;
}

export default (tag) => (...css) => {
  const element = (props) => React.createElement(tag, props);
  let injectFunctions = [];
  css.forEach(f => typeof f === 'function' && injectFunctions.push(f));
  return constructElement(element, css[0], injectFunctions);
};
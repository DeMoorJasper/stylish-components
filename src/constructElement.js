import React from 'react';
import injectCss from './css/injectCss';

const constructElement = (element, css, classNames = []) => {
  classNames = Array.isArray(css) && [...classNames, injectCss(css[0])];
  let res = (classNames.length > 0 && ((props) => element({...props, className: `${classNames.join(' ')} ${props.className || ''}`}))) || element(css);
  res.extend = (css) => constructElement(element, css, classNames)
  return res;
}

export default (tag) => (css) => {
  const element = (props) => React.createElement(tag, props);
  return constructElement(element, css);
};
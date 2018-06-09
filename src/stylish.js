import constructElement from './constructElement';
import domElements from './utils/domElements';

export default domElements.reduce((obj, el) => {
  obj[el] = constructElement(el);
  return obj;
}, {});
import constructElement from './constructElement';
import domElements from './utils/domElements';

let stylish = {};
domElements.forEach(el => {
  stylish[el] = constructElement(el);
});

export default stylish;
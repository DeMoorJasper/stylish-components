import injectCss from './injectCss';

export default (css) => {
  return Array.isArray(css) ? injectCss(css[0]) : injectCss(css);
}
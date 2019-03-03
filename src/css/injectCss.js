import processCss from "./processCss";

const getStyleContainer = () => {
  if (typeof document === 'undefined') return null;

  let styleContainer = document.getElementById("stylish-components");
  if (!styleContainer) {
    styleContainer = document.createElement("style");
    styleContainer.id = "stylish-components";
    styleContainer.type = "text/css";
    document.head.appendChild(styleContainer);
  }

  return styleContainer;
};

export default css => {
  let stylesheet = processCss(css);
  let styleContainer = getStyleContainer();
  if (
    styleContainer &&
    styleContainer.innerHTML.indexOf(stylesheet.hash) === -1
  ) {
    styleContainer.innerHTML += stylesheet.css;
  }
  return stylesheet.hash;
};

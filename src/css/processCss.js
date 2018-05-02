import murmurHash from '../utils/murmurHash';

const SECTIONS_REGEX = /.*{(.|\n)*}/gm;

const extractSections = (css) => {
  if (css.indexOf('{') > -1) {
    let sections = [];
    let current = [0, 0, ''];
    css.split('\n').forEach(line => {
      current[0] += (line.match(/{/g) || []).length;
      current[1] += (line.match(/}/g) || []).length;
      current[2] += (current[0] > 0 && `${line}\n`) || '\n';
      if (current[0] > 0 && current[0] === current[1]) {
        sections.push(current[2]);
        current = [0, 0, ''];
      }
    });
    return sections;
  }
}

const process = (css, hash) => {
  css = css.trim();
  css = css.replace(/&/g, `.${hash}`);
  let pieces = extractSections(css);
  pieces = Array.isArray(pieces) && pieces.map(piece => (piece.indexOf('@') > -1 && `
    ${piece.substring(0, piece.indexOf('{') + 1)}
      ${process(piece.substring(piece.indexOf('{') + 1, piece.lastIndexOf('}') - 1), hash)}
    ${piece.substring(piece.lastIndexOf('}'))}
  `) || piece);
  css = css.replace(SECTIONS_REGEX, '');
  return `
    .${hash} {
      ${css}
    }
    ${(pieces && pieces.join('\n')) || ''}
  `;
}

export default (css) => {
  let hash = `c${murmurHash(css)}`;
  return {
    css: process(css, hash),
    hash
  };
}
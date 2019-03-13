const specSymbols = ["(",")","|","{","}","[","]"];

module.exports = function check(str, bracketsConfig) {
  const regStr = bracketsConfig.map(([open, close]) => {
    if (specSymbols.includes(open)) open = "\\" + open;
    if (specSymbols.includes(close)) close = "\\" + close;
    return `(${open}${close})`;
  }).join("|");
  const re = new RegExp(regStr);
  do {
    str = str.replace(re, "");
  } while (~str.search(re));
  return !str.length;
};

const StyleDictionary = require("style-dictionary").extend("config/index.js");
const { fileHeader } = StyleDictionary.formatHelpers;

const getNameFromType = (originalName, type) => {
  const regex = new RegExp(`${type}.*$`, "g");
  return originalName.match(regex)[0];
};

exports.formatTokens = (file, tokens, format) => {
  const isCss = format === "css";
  result = isCss ? fileHeader(file) + ":root {\n" : fileHeader(file);

  tokens.forEach(({ value, name, attributes: { type } }) => {
    const nameWithoutBrand = getNameFromType(name, type);
    const variableIndicator = isCss ? "--" : "$";
    result += `${variableIndicator}${nameWithoutBrand} : ${value};\n`;
  });

  return isCss ? result + "}\n" : result;
};

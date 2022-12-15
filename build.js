const StyleDictionary = require("style-dictionary").extend("config/index.js");
const { fileHeader } = StyleDictionary.formatHelpers;
const Color = require("tinycolor2");
const { formatTokens } = require("./config/utils");

console.log("Build started...");
console.log("\n==============================================");

// REGISTER THE CUSTOM FILTERS

StyleDictionary.registerFilter({
  name: "isBorder",
  matcher: function (token) {
    return ["borderRadius", "borderWidth"].includes(token.attributes.category);
  },
});

const hexToRgba = (hexColor) => {
  var color = Color(hexColor);
  if (color.getAlpha() === 1) {
    return color.toHexString();
  } else {
    return color.toRgbString();
  }
};

StyleDictionary.registerTransform({
  name: "shadow/css",
  type: "value",
  matcher: function (token) {
    return token.type === "boxShadow";
  },
  transformer: (token) => {
    const shadows = Object.values(token.value);
    const result = shadows.map(
      (shadow) =>
        `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${
          shadow.spread
        }px ${hexToRgba(shadow.color)}`
    );
    return result.join(", ");
  },
});

StyleDictionary.registerTransformGroup({
  name: "tokens-scss",
  transforms: [
    "attribute/cti",
    "name/cti/kebab",
    "time/seconds",
    "content/icon",
    "size/rem",
    "color/css",
    "shadow/css",
  ],
});

StyleDictionary.registerTransformGroup({
  name: "tokens-js",
  transforms: [
    "attribute/cti",
    "name/cti/pascal",
    "size/rem",
    "color/hex",
    "shadow/css",
  ],
});

StyleDictionary.registerTransformGroup({
  name: "tokens-css",
  transforms: [
    "attribute/cti",
    "name/cti/kebab",
    "time/seconds",
    "content/icon",
    "size/rem",
    "color/css",
    "shadow/css",
  ],
});

const extractValue = (tokenObject, parentObject = {}, parentProp = "") => {
  for (let prop in tokenObject) {
    if (typeof tokenObject[prop] === "object") {
      extractValue(tokenObject[prop], tokenObject, prop);
    } else if (prop === "value") {
      parentObject[parentProp] = tokenObject[prop];
    }
  }
};

StyleDictionary.registerFormat({
  name: "customJsObject",
  formatter: function ({ dictionary, file }) {
    const { tokens } = dictionary;
    const formattedTokens = { ...tokens };
    const tokensToExport = Object.keys(formattedTokens);
    result = fileHeader(file);

    tokensToExport.forEach((token) => {
      extractValue(formattedTokens[token]);
      result += `exports.${token} = ${JSON.stringify(
        formattedTokens[token],
        null,
        2
      )};\n`;
    });

    extractValue(formattedTokens);

    return result;
  },
});

StyleDictionary.registerFormat({
  name: "customCoreTokens",
  formatter: ({ file, options, dictionary }) => {
    const { allTokens } = dictionary;
    const { format } = options;

    return formatTokens(file, allTokens, format);
  },
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
// const config = require(__dirname + '/config/index.js');
// const StyleDictionaryExtended = StyleDictionary.extend(config);

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionary.buildAllPlatforms();

console.log("\n==============================================");
console.log("\nBuild completed!");

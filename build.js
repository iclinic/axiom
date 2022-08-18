const StyleDictionary = require('style-dictionary').extend('config/index.js');

console.log('Build started...');
console.log('\n==============================================');


// REGISTER THE CUSTOM FILTERS

StyleDictionary.registerFilter({
    name: 'isBorder',
    matcher: function(token) {
        // console.log(token);
      return ['borderRadius', 'borderWidth'].includes(token.attributes.category)
    }
});

StyleDictionary.registerTransform({
    name: "shadow/css",
    // transitive: true,
    type: "value",
    matcher: function (token) {
        // console.log(token)
        return token.type === "boxShadow";
    },
    transformer: (token) => {
        const shadows = Object.values(token.value);
        // console.log(shadows);
        // console.log(shadows.length);
        const result = shadows.map(
            (shadow) =>
                `${shadow.x} ${shadow.y} ${shadow.blur} ${shadow.spread} ${shadow.color}`
        );
        console.log(result.join(","));
        return result.join(",");
    },
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
// const config = require(__dirname + '/config/index.js');
// const StyleDictionaryExtended = StyleDictionary.extend(config);



// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionary.buildAllPlatforms();



console.log('\n==============================================');
console.log('\nBuild completed!');
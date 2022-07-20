const StyleDictionary = require('style-dictionary');

console.log('Build started...');
console.log('\n==============================================');


// REGISTER THE CUSTOM FILTERS

StyleDictionary.registerFilter({
    name: 'isBorder',
    matcher: function(token) {
      return ['borderRadius', 'borderWidth'].includes(token.attributes.category)
    }
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const config = require(__dirname + '/config/index.js');
const StyleDictionaryExtended = StyleDictionary.extend(config);


// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');
const StyleDictionary = require('style-dictionary');

console.log('Build started...');
console.log('\n==============================================');


// REGISTER THE CUSTOM FILTERS

StyleDictionary.registerFilter({
    name: 'isBorder',
    matcher: function(token) {
      return ['borderRadius', 'borderWidth'].includes(token.attributes.type)
    }
});
  
StyleDictionary.registerFilter({
    name: 'isGlobalColor',
    matcher: function(token) {
      return token.attributes.type === 'color' && token.attributes.category === 'global'
    }
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');


// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');
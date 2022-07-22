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

StyleDictionary.registerFilter({
    name: 'isSpacing',
    matcher: function(token) {
      console.log ('>', token)
      return ['borderRadius', 'borderWidth'].includes(token.attributes.category)
    }
});
  
StyleDictionary.registerFilter({
    name: 'isGlobalColor',
    matcher: function(token) {
      return token.attributes.type === 'color' && token.attributes.category === 'global'
    }
});

// StyleDictionary.registerTransform({
//   type: `value`,
//   transitive: true,
//   name: `removeGlobalTransform`,
//   matcher: (token) => {},
//   transformer: (token) => {
//     // token.value will be resolved and transformed at this point
//   }
// })

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const config = require(__dirname + '/config/index.js');
const StyleDictionaryExtended = StyleDictionary.extend(config);


// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');
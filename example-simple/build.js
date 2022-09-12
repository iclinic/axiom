const StyleDictionary = require('style-dictionary').extend('config.json');

StyleDictionary.registerTransform({
    name: 'time/seconds',
    type: 'value',
    matcher: function(prop) {
        console.log(prop.attributes.category)
        return prop.attributes.category === 'time';
    },
    transformer: function(prop) {
        return (parseInt(prop.original.value) / 1000).toString() + 's';
    }
});

StyleDictionary.buildAllPlatforms();
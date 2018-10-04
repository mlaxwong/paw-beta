const fg = require('fast-glob');

let configs = {
    env: process.env,
};

const configFiles = fg.sync([__dirname + '/_*.config.js']);
configFiles.forEach(entry => {
    const key = entry.match(/\_([^\_]+)\.config\.js/i);
    configs[key[1]] = require(entry);
});

module.exports = configs;
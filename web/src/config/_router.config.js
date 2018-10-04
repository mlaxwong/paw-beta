const path = require('path')
const fg = require('fast-glob');

let routers = [];

const dir = path.resolve(__dirname, '../');
const routerFiles = fg.sync([
	dir + '/containers/_route.js',
	dir + '/containers/**/_route.js',
	dir + '/containers/_*.route.js',
	dir + '/containers/**/_*route.js',
]);
routerFiles.forEach(entry => {
    // const key = entry.match(/\_([^\_]+)\.config\.js/i);
    // routers[key[1]] = require(entry);
    routers.push(entry);
});

module.exports = routers;
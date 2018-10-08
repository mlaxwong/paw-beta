const path = require('path')
const fg = require('fast-glob');

let routes = [];
let indexsCounter = {};
let temp = [];

const dir = path.resolve(__dirname, '../');
const routerFiles = fg.sync([
	dir + '/containers/_route.js',
	dir + '/containers/**/_route.js',
	dir + '/containers/_*.route.js',
	dir + '/containers/**/_*route.js',
]);
routerFiles.forEach(routeFile => {
	// const matchs = routeFile.match(/\_([^\_]+)?\.?route\.js/i);
	// const level = matchs[1] ?  matchs[1] : 'root';
	// const levels = level.split('.');
	// routes.push(levels);
	const routeConfig = require(routeFile);
	const parent = 'parent' in routeConfig ? routeConfig.parent.replace(/\/$/, "").split('/') : [];
	const routeItem = routeConfig.route;
	
	let parts = '';
	if (parent.length > 0) {
		let route = routeItem;
		parent.reverse().forEach(p => {
			parts = p + '/' + parts;
			parts = parts.replace(/\/$/, "");
			if (parts in indexsCounter) {
				indexsCounter[parts] ++;
			} else {
				indexsCounter[parts] = 0;
			}

			let test = parts.split('/').join('][children][' + indexsCounter[parts] + ']');
			temp.push(test);

			// Object.byString(someObj, parts + '[' + indexsCounter[parts] + '].children');

			let reset = {children: []};
			reset['children'].splice(indexsCounter[parts], 0, route);
			route = reset;

			// route = {
			// 	[indexsCounter[parts]]: {
			// 		children: [
			// 			route
			// 		]
			// 	}
			// }
		});

		routes = {
			...routes,
			...route,
		};
	} else {
		if ('_' in indexsCounter) {
			indexsCounter['_'] ++;
		} else {
			indexsCounter['_'] = 0;
		}

		routes.push(routeItem)
	}
	// routes.push(route);
	// routes = indexsCounter;
	// routes = indexsCounter;
	// routes = {
	// 	...routes,
	// 	...route,
	// };

	routes = indexsCounter;
});

Object.byString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

module.exports = routerFiles;
export default ({
    route = [],
    dir = null,
    layout = null,
} = {}) => {

    var routes = [];

    function importAll (r, dir) {

        r.keys().forEach(key => {
            const reg = new RegExp('.\/containers' + dir.replace(/\//g, "\\\/") + '\/[^/]+\/\_route\.js', 'i');
            
            if (key.match(reg)) routes.push(r(key).default)
        });
    }

    importAll(require.context('./../', true, /\_route\.js/), dir == null ? '' : '/' + dir);

    return layout ? {...layout, children: routes} : { ...route, children: routes};
}
const webpack = require('webpack')

const pluginName = 'AutoRouterPlugin'

class AutoRouterPlugin {
  constructor() {
    // console.log('auto created router');

    return new webpack.DefinePlugin({
      router: JSON.stringify([
        {testing: 'testing'},
      ])
    });
  }

  apply(compiler) {
    const generate = () => {
      console.log('Hello World!');
    }
    compiler.hooks.beforeRun.tap(pluginName, generate);
    compiler.hooks.watchRun.tap(pluginName, generate);
  }
}
module.exports = AutoRouterPlugin;
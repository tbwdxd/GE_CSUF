var auth = require('../helpers/auth');
var proxy = require('../helpers/proxy');

var config = {
  /**
   * --------- ADD YOUR UAA CONFIGURATION HERE ---------
   *
   * This uaa helper object simulates NGINX uaa integration using Grunt allowing secure cloudfoundry service integration in local development without deploying your application to cloudfoundry.
   * Please update the following uaa configuration for your solution
   */
  uaa: {
    clientId: 'fullertonClient',
    serverUrl: 'https://fcaefc3a-c584-4541-a099-14da989ccc82.predix-uaa.run.aws-usw02-pr.ice.predix.io',
    defaultClientRoute: '/home',
    base64ClientCredential: 'ZnVsbGVydG9uQ2xpZW50OnIzWlozdmxscjVPWGhOd2hsL3F4RWtGbDdvSGpTN1B1YWNRYUN4bVg0QTg9'
  },
  /**
   * --------- ADD YOUR SECURE ROUTES HERE ------------
   *
   * Please update the following object add your secure routes
   *
   * Note: Keep the /api in front of your services here to tell the proxy to add authorization headers.
   */
  proxy: {
    '/api/view-service(.*)': {
      url: 'https://predix-views.run.aws-usw02-pr.ice.predix.io/api$1',
      instanceId: '15fc84e2-8354-4b4e-bd00-6085cf79a36c'
     },
     '/api/datapoints': {
     	 url: 'https://time-series-store-predix.run.aws-usw02-pr.ice.predix.io/v1/datapoints/',
    	 instanceId: 'b7028022-acfd-41bd-98b7-7865f0c499fe',
		 pathRewrite: { '^/api/v1/datapoints': ''}
    	 }
  }
};

module.exports = {
  server: {
    options: {
      port: 9000,
      base: 'public',
      open: true,
      hostname: 'localhost',
      middleware: function (connect, options) {
        var middlewares = [];

        //add predix services proxy middlewares
        middlewares = middlewares.concat(proxy.init(config.proxy));

        //add predix uaa authentication middlewaress
        middlewares = middlewares.concat(auth.init(config.uaa));

        if (!Array.isArray(options.base)) {
          options.base = [options.base];
        }

        var directory = options.directory || options.base[options.base.length - 1];
        options.base.forEach(function (base) {
          // Serve static files.
          middlewares.push(connect.static(base));
        });

        // Make directory browse-able.
        middlewares.push(connect.directory(directory));

        return middlewares;
      }
    }
  }
};

'use strict';

export default function($routeProvider) {
  'ngInject';

  $routeProvider.when('/start', {
    template: require('./partials/start.html')
  });

  $routeProvider.when('/second', {
    template: require('./partials/second.html')
  });

  $routeProvider.otherwise({
    template: require('./partials/start.html')
  });
}

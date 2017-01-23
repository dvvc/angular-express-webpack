'use strict';

export default class AppCtrl {

  constructor($scope, $http) {
    'ngInject';

    $scope.testVal = 0;

    $scope.ajaxRequest = function() {

      $http.get('/api')
        .then(res => {
          $scope.message = res.data.message;
        })
        .catch(e => {
          console.log('Error in request', e);
          $scope.error = e;
        });
    };
  }

}

// create an angular module
const app = angular.module('stockPulseApp', []);

// create a controller passing in $scope to store stock messages and $http for routing
app.controller('appController', ($scope, $http) => {

  $scope.formData = {};

  // function for getting stock messages
  $scope.getMessages = () => {
    if($scope.formData.symbol) {
      $scope.formData.symbol = $scope.formData.symbol.toUpperCase();
      // post request to '/stocks'
      console.log('formData', $scope.formData);
      $http.post('/stocks', $scope.formData)
        .then((stockData) => {
          console.log('stockData', stockData);
          $scope.stockMessages = stockData.data;
          $scope.formData = {};
        })
        .catch((stockData) => {
          console.log('error posting', stockData);
        });
    }
  };

});
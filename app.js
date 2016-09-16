angular.module('hangmanApp', []);

angular
  .module('hangmanApp')
  .controller('mainCtrl', mainCtrl);

function mainCtrl($scope) {

  console.log('main');
  $scope.things = ['Hoola', 'Bongos', 'Burp'];
}

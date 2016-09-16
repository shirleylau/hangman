angular.module('hangmanApp', [])
  .controller('appCtrl', appCtrl)
  .directive('appDir', appDir);

function appCtrl($scope) {
  console.log('CTRL');
  $scope.things = ['Pianos', 'Strangbeans', 'Jam'];
}

function appDir() {
  return {
    restrict: 'E',
    scope: {
      thing: '@'
    },
    template: '<h2>Yoohoo, friend! I like {{thing}} a lot.<h2>',
    controller: function ($scope) {
      console.log('DIR');
    }
  }
}

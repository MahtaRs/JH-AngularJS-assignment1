(function(){
  "use strict";
  angular.module("myapp" , [])
  .controller("maincontroller" , doit);
  function doit($scope){
    $scope.string = "My string";
    $scope.update_val = function (){
        $scope.result = $scope.string;
    }
  }
})();

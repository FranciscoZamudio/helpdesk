//we inyect the controller with a model
moduleApp.controller("ticketsController", function($scope, ticketsService, $http){

  $scope.getData = function(){
      $http({
            method : "GET",
            url : "./models/ticketsModel.php"
        }).then(function mySuccess(response) {
            $scope.dogs = response.data;
        }, function myError(response) {
            $scope.dogs = ['this1','is a1','test1'];
        });
  };


$scope.init = function(){
  $scope.getData();
  //$scope.dogs
};

$scope.init();



  //$scope.dogs = ticketsService.getNotas();
  //$scope.dogs = ['Bernese1', 'Husky1', 'Goldendoodle1'];
});

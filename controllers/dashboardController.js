moduleApp.controller('dashboardController', function($scope, $http) {
  $scope.ticketsTable = {};

  $scope.getData = function(){
      $http({
            method : "GET",
            url : "./models/dashboardModel.php?getTickets=gt"
        }).then(function mySuccess(response) {
            $scope.ticketsTable = response.data;
        }, function myError(response) {
            console.log("there was an error");
        });
  };

  $scope.init = function(){
    $scope.getData();
  };

  $scope.init();

});

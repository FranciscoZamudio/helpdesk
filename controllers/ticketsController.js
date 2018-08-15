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

  $scope.postData = function(info){
    $http({
          url : "./models/ticketsModel.php",
          method: 'POST',
          data: info,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function mySuccess(response) {
          console.log("the ticket has been registered");
      }, function myError(response) {
          $scope.dogs = ['this1','is a1','test1'];
      });
  };

$scope.init = function(){
  //$scope.getData();
  //$scope.dogs
};

$scope.init();

$scope.master = {};
$scope.insertTicket = function(ticket) {
  var info = 'action=addTicket' + '&ticketInfo=' + ticket;
  $scope.postData(info);
  console.log(ticket);
};


});

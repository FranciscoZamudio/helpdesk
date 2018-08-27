//we inject the controller with a model
moduleApp.controller("ticketsController", function($scope, ticketsService, $http){



  $scope.postData = function(info){
    $http({
          url : "./models/ticketsModel.php",
          method: 'POST',
          data: info,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function mySuccess(response) {
          console.log("the ticket has been registered");
      }, function myError(response) {
          console.log("there was an error");
      });
  };



$scope.master = {};
$scope.insertTicket = function(ticket) {
  var info = 'action=addTicket' + '&ticketInfo=' + JSON.stringify(ticket);
  $scope.postData(info);
};


});

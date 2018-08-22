<?php
define('__ROOT__', dirname(dirname(__FILE__)));
require(__ROOT__.'/connection.php');
require(__ROOT__.'/models/queries.php');

$dashboard = new Dashboard($conn);

if(isset($_GET["getTickets"]) && !empty($_GET["getTickets"]) && $_GET["getTickets"] == "gt"){
    $dashboard->getTickets();
};



class Dashboard{

  private $conn;

  function __construct($conn){
    $this->conn = $conn;
  }

  function getTickets(){
    $ticketsArray = array();
    $stmt = $this->conn->query("SELECT * FROM tickets order by idTickets desc");
    if ($stmt->num_rows > 0) {
      while( $row = $stmt->fetch_assoc() ) {
          $ticketsArray[] = $row;
      }
    }
    echo json_encode($ticketsArray);
  }

}
?>

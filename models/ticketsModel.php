<?php
define('__ROOT__', dirname(dirname(__FILE__)));
require(__ROOT__.'/connection.php');
require(__ROOT__.'/models/queries.php');

$ticket = new Tickets();

if(isset($_POST["action"]) && !empty($_POST["action"]) && $_POST["action"] == "addTicket"){
  if(isset($_POST["ticketInfo"]) && !empty($_POST["ticketInfo"])){
    $ticket->addTicket($_POST["ticketInfo"]);
  }
};



class Tickets{
  function addTicket($ticketInfo){
    // prepare and bind
    require(__ROOT__.'/connection.php');
    $stmt = $conn->prepare("INSERT INTO tickets(name, area, type, description, priority, status) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $ticketInfo["area"], $ticketInfo["description"], $ticketInfo["name"], $ticketInfo["priority"]);
    $stmt->execute();
    print_r("exito");
    $stmt->close();
    $conn->close();


    // $resultado = $mysqli->query("INSERT INTO tickets(name, area, type, description, priority, status) VALUES ();");
    // $fila = $resultado->fetch_assoc();
    // echo $fila['_msg'];
  }
}
?>

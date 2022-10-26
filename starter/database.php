<?php

    //CONNECT TO MYSQL DATABASE USING MYSQLI
    $localhost='localhost';
    $username='root';
    $passwrod='';
    $database ='scrumboard';
    global $mysqli ;
    $mysqli = new mysqli($localhost,$username,$passwrod,$database);
    // Check connection
    if ($mysqli -> connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        exit();
    }
    
?>
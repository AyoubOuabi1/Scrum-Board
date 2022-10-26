<?php
    //INCLUDE DATABASE FILE
    include('database.php');
    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();
/*    $title = $_POST['fTitle'];
    $type = $_POST['fType'];
    $priority = $_POST['fPriority'];
    $status = $_POST['fStatus'];
    $dateTask = $_POST['fDate'];
    $description = $_POST['fDescription'];*/

//ROUTING
    if(isset($_POST['save']))        saveTask();
    if(isset($_POST['update']))      updateTask();
    if(isset($_POST['delete']))      deleteTask();


     function getTasks()
    {  global $mysqli ;

        $rqt ="select tasks.id, tasks.title,tasktypes.name as typeName ,taskpriorities.name as priorityName,taskstatus.name as statusName, tasks.task_datetime,
                tasks.description
                from  tasks  inner join tasktypes  on tasks.type_id =tasktypes.id
                inner join taskpriorities on tasks.priority_id = taskpriorities.id
                inner join taskstatus  on tasks.status_id = taskstatus.id";

        $res=$mysqli->query($rqt);
        $return_arr = array();
        if($res->num_rows > 0){

            while ($row=$res->fetch_assoc()){
                $return_arr[] = array(
                    "id" => $row['id'],
                    "title" =>$row['title'],
                    "type" => $row['typeName'],
                    "priority" => $row['priorityName'],
                    "status" => $row['statusName'],
                    "date" => $row['task_datetime'],
                    "description" => $row['description']
                );
            }

        }


        return $return_arr;
    }

    function saveTask()
    {
        //CODE HERE
        //SQL INSERT
        //$rqt="CALL insertIntoTasks('$title',2,2,2,SYSDATE(),'tttttttttttttttttttttttttttttt')";
        $_SESSION['message'] = "Task has been added successfully !";
		header('location: index.php');
    }

    function updateTask()
    {
        //CODE HERE
        //SQL UPDATE
        $_SESSION['message'] = "Task has been updated successfully !";
		header('location: index.php');
    }

    function deleteTask()
    {
        //CODE HERE
        //SQL DELETE
        $_SESSION['message'] = "Task has been deleted successfully !";
		header('location: index.php');
    }

?>
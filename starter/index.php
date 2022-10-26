<?php
    require('database.php');
    include ('scripts.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>YouCode | Scrum Board</title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0,
			user-scalable=no" name="viewport"/>
    <meta content="" name="description"/>
    <meta content="" name="author"/>

    <!-- ================== BEGIN core-css ================== -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet" />
    <link href="assets/css/vendor.min.css" rel="stylesheet" />
    <link href="assets/css/default/app.min.css" rel="stylesheet" />
    <link href="assets/css/style.css" rel="stylesheet" />
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <!-- ================== END core-css ================== -->
</head>
<body>

<!-- BEGIN #app -->

<div class="app-without-sidebar" id="app">
    <!--Add task float button-->
    <div class="float-end me-50px mb-50px position-fixed d-md-none d-inline bottom-0 mb-50px end-0 me-50px float-btn" data-bs-toggle="modal" onclick="createTask()"
         type="button">
        <button class="btn backgound-btn text-white circlr "><i class="bi bi-plus h1"></i></button>
    </div>
    <!-- BEGIN #content -->
    <div class="app-content main-style" id="content">
        <div class="row">
            <div class="col-xxl-6 col-md-6">
                <ol class="breadcrumb h4">
                    <li class="breadcrumb-item "><a href="javascript:">Home</a></li>
                    <li class="breadcrumb-item active">Scrum Board</li>
                </ol>
                <!-- BEGIN page-header -->
                <h1 class="page-header ">
                    Scrum Board
                </h1>
                <!-- END page-header -->
            </div>
            <!--Add task button-->
            <div class="col-xxl-6 d-md-inline col-md-6 d-none  text-end">
                <button class="btn text-white backgound-btn rounded-pill" data-bs-toggle="modal" onclick="createTask()"
                        type="button"><i class="bi bi-plus h5"></i><a>&emsp;Add Task&emsp;</a></button>
            </div>
        </div>

        <!--carts container-->
        <div class="container-fluid">
            <div class="row">
                <!--cart to do-->
                <div class="col-xxl-4 col-md-6 col-sm-12 mb-4" ondragover="allowDrop(event)" ondrop="changeStatusToDo()">
                    <div class="">
                        <div class="col-12 rounded-top cart-background text-white p-3" id="DoneTitle">
                            <?php
                            $counterTodo=0;
                            foreach (getTasks() as $row){

                                if($row['status']=="To Do"){
                                    $counterTodo++;
                                }
                            }
                            echo '<h4 class="">To Do(<span >'.$counterTodo.'</span>)</h4>';

                            ?>
                        </div>
                        <div class="" id="in-progress-tasks">  </div>
                        <!-- TO DO  TASKS HERE -->
                        <?php

                        foreach (getTasks() as $row){

                            if($row['status']=="To Do"){
                                echo '<button name="clickedButton" ondrag="dragTask(${i})" draggable="true"  class="col-12 text-start btn-light text-black border-end-0 shadow-none" onclick="update()">
                                                <div class="row mt-2">
                                                <div class="col-1 ">
                                                    <i class="bi bi-exclamation-octagon text-red h1"></i>
                                                </div>
                                                <div class="col-11 ">
                                                    <div class="h3"> '.$row["title"].'</div>
                                                    <div class="">
                                                    <div class=""># '.$row["id"].' created in '.$row["date"].'</div>
                                                     <div class="" title=" $row["description"] "> '.$row["description"].' </div>
                                                </div>
                                                 <div class="mb-3 mt-2">
                                                      <span class="btn btn-primary "> '.$row["priority"].' </span>
                                                    <span class="btn btn-secondary "> '.$row["type"].' </span>
                                                 </div>
                                                </div>
                                                </div>

                                        </button>';
                            }
                        }
                        ?>


                    </div>
                </div>
                <!--cart progress-->
                <div class="col-xxl-4 col-md-6 col-sm-12 mb-4" ondragover="allowDrop(event)" ondrop="changeStatusProgress()">
                    <div class="">
                        <div class="col-12 rounded-top cart-background text-white p-3" id="progressTitle">
                        <?php
                        $counter=0;
                        foreach (getTasks() as $row){

                            if($row['status']=="In Progress"){
                                $counter++;
                            }
                        }
                        echo ' <h4 class="">In Progress(<span >'.$counter.'</span>)</h4>';

                        ?>
                        </div>
                        <div class="" id="in-progress-tasks">  </div>
                            <!-- IN PROGRESS TASKS HERE -->
                            <?php

                            foreach (getTasks() as $row){

                                if($row['status']=="In Progress"){
                                    echo '<button name="clickedButton" ondrag="dragTask(${i})" draggable="true"  class="col-12 text-start btn-light text-black border-end-0 shadow-none" onclick="update()">
                                                <div class="row mt-2">
                                                <div class="col-1 ">
                                                    <i class=" bi bi-exclamation-octagon text-red h1"></i>
                                                </div>
                                                <div class="col-11 ">
                                                    <div class="h3"> '.$row["title"].'</div>
                                                    <div class="">
                                                    <div class=""># '.$row["id"].' created in '.$row["date"].'</div>
                                                     <div class="" title=" $row["description"] "> '.$row["description"].' </div>
                                                </div>
                                                 <div class="mb-3 mt-2">
                                                      <span class="btn btn-primary "> '.$row["priority"].' </span>
                                                    <span class="btn btn-secondary "> '.$row["type"].' </span>
                                                 </div>
                                                </div>
                                                </div>

                                        </button>';
                                }
                            }
                            ?>


                        </div>
                    </div>
                </div>
                <!--cart done-->
                <div class="col-xxl-4 col-md-6 col-sm-12 mb-4 " ondragover="allowDrop(event)" ondrop="changeStatusDone()">
                    <div class="">
                        <div class="col-12 rounded-top cart-background text-white p-3" id="DoneTitle">
                        <?php
                        $counterDone=0;
                        foreach (getTasks() as $row){

                            if($row['status']=="Done"){
                                $counterDone++;
                            }
                        }
                        echo '<h4 class="">Done(<span >'.$counterDone.'</span>)</h4>';

                        ?>
                        </div>
                        <div class="" id="in-progress-tasks">  </div>
                        <!-- DONE TASKS HERE -->
                        <?php

                        foreach (getTasks() as $row){

                            if($row['status']=="Done"){
                                echo '<button name="clickedButton" ondrag="dragTask(${i})" draggable="true"  class="col-12 text-start btn-light text-black border-end-0 shadow-none" onclick="update()">
                                                <div class="row mt-2">
                                                <div class="col-1 ">
                                                    <i class="bi bi-check-circle text-green h1"></i>
                                                </div>
                                                <div class="col-11 ">
                                                    <div class="h3"> '.$row["title"].'</div>
                                                    <div class="">
                                                    <div class=""># '.$row["id"].' created in '.$row["date"].'</div>
                                                     <div class="" title=" $row["description"] "> '.$row["description"].' </div>
                                                </div>
                                                 <div class="mb-3 mt-2">
                                                      <span class="btn btn-primary "> '.$row["priority"].' </span>
                                                    <span class="btn btn-secondary "> '.$row["type"].' </span>
                                                 </div>
                                                </div>
                                                </div>

                                        </button>';
                            }
                        }
                        ?>


                    </div>
                </div>
                </div>
            </div>
        </div>

    </div>
    <!-- END #content -->


    <!-- BEGIN scroll-top-btn -->
    <a class="btn btn-icon btn-circle btn-success
				btn-scroll-to-top" data-toggle="scroll-to-top" href="javascript:"><i class="fa fa-angle-up"></i></a>
    <!-- END scroll-top-btn -->

</div>
<!-- END #app -->

<!-- TASK MODAL -->
<div aria-hidden="true" aria-labelledby="exampleModalCenterTitle" action="scripts.php" method="POST" class="modal fade" id="modal-task" role="dialog"
     tabindex="-1">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header ">
                <h2 id="tasktitle"></h2>
            </div>
            <div class="modal-body">
                <!--begin form-->
                <form action="" class="form">
                    <div class="col-12 bg-red text-white h2 p-2 rounded-3 d-none " id="checkEmpty">
                        please remplire tous les champs
                    </div>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input class="form-control form-control-lg check" id="title" name="fTitle" required type="text">
                    </div>
                    <label class="mt-2">Type</label> <br>
                    <div class="form-check">
                        <input class="check" id="feature" name="fType" required type="radio" value="1">
                        <label for="feature">feature&emsp; </label>
                        <input class="check" id="bug" name="fType" required type="radio" value="2">
                        <label for="bug">bug</label>
                    </div>
                    <div class="mt-2 form-group">
                        <label for="priority">Priority</label>
                        <select class="form-select form-select-lg check" id="priority" name="fPriority" required>
                            <option selected>please select</option>
                            <option value="1">low</option>
                            <option value="2">Meduim</option>
                            <option value="3">High</option>

                        </select>
                    </div>
                    <div class="mt-2 form-group">
                        <label for="status">Status</label>
                        <select class="form-select form-select-lg check" id="status"  name="fStatus" required>
                            <option selected>please select</option>
                            <option value="1">To Do</option>
                            <option value="2">Progress</option>
                            <option value="3">Done</option>

                        </select>
                    </div>
                    <div class="mt-2 form-group">
                        <label for="date">Date</label>
                        <input class=" form-control form-control-lg check" id="date" name="fDate" required type="date">
                    </div>
                    <div class="mt-2 form-group">
                        <label for="Description">Description</label> <br>
                        <textarea class="form-control form-control-lg check" name="fDescription" id="Description" required
                                  rows="5"></textarea>
                    </div>

                </form>
                <!--end form-->
            </div>
            <div class="modal-footer" id="modelFooter">

            </div>
        </div>
    </div>
</div>

<!-- TASK MODAL DELETE AND UPDATE-->
<!-- ================== BEGIN core-js ================== -->
<script src="assets/js/vendor.min.js"></script>

 <script  src="assets/js/js.js"></script>

<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</body>
<!-- ================== END core-js ================== -->
</body>
</html>


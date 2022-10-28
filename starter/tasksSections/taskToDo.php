<div class="">
  <div class="col-12 rounded-top cart-background text-white p-3" id="todoTitle">
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
  <div class="" id="todo-tasks">
    <!-- TO DO  TASKS HERE -->
    <?php

          foreach (getTasks() as $row){

          if($row['status']=="To Do"){
          echo '<button name="clickedButton" data-form="'.$row["id"].','.$row["title"].','.$row["type"].','.$row["priority"].','.$row["status"].','.$row["date"].','.$row["description"].'"  id="'.$row["id"].'" ondrag="dragTask(${i})" draggable="true"  class="col-12 text-start btn-light text-black border-end-0 shadow-none" onclick="update( '.$row["id"].')">
    <div class="row mt-2">
      <div class="col-1 ">
        <i class="bi bi-exclamation-octagon text-red h1"></i>
      </div>
      <div class="col-11 ">
        <div class="h3"> '.$row["title"].'</div>
        <div class="">
          <div class=""># '.$row["id"].' created in '.$row["date"].'</div>
          <div class="" title=" '.$row["description"].' "> '.$row["description"].' </div>
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
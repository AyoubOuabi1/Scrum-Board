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
    <div class="" id="in-progress-tasks">
        <!-- IN PROGRESS TASKS HERE -->
        <?php

        foreach (getTasks() as $row){

            if($row['status']=="In Progress"){
                echo '<button name="clickedButton" data-form="'.$row["id"].','.$row["title"].','.$row["type"].','.$row["priority"].','.$row["status"].','.$row["date"].','.$row["description"].'" id="'.$row["id"].'"  id="'.$row["id"].'" ondrag="dragTask(${i})" draggable="true"  class="col-12 text-start btn-light text-black border-end-0 shadow-none" onclick="update( '.$row["id"].')">
                        <div class="row mt-2">
                            <div class="col-1 ">
                                <i class="bi bi-arrow-clockwise text-green h1"></i>
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


// SCRIPT WHERE WE NEED THE ARRAY
//general variable section 
let taskSection = document.getElementById("to-do-tasks");
let progressSection = document.getElementById("in-progress-tasks");
let doneSection = document.getElementById("done-tasks");
let title=document.getElementById("title");
let type=document.getElementsByName("type");
let priority =document.getElementById("priority");
let taskStatus=document.getElementById("status")
let date =document.getElementById("date");
let description=document.getElementById("Description");
let clickedButton=document.getElementsByName("clickedButton");
let saveTaskBtn=document.getElementsByName("saveTask");
let updateTaskbtn=document.getElementById("updateTaskCrud");

let deleteTaskBtn=document.getElementsByName("deleteTaskAfterCrud");

loadTasks();
function loadTasks() {
    var c;
  for (var i = 0; i < tasksTables.length; i++) {
    c=i+1;
        
    if (tasksTables[i].status === "To Do") {
      taskSection.innerHTML+=`<button name="clickedButton"   class="col-12 text-start btn-light text-black border-end-0 shadow-none" onclick="updateTask(${i})">
      <div class="row mt-2">
        <div class="col-1 ">
          <i class=" bi bi-exclamation-octagon text-red h1"></i>
        </div>
        <div class="col-11 ">
          <div class="h3">${tasksTables[i].title}</div>
          <div class="">
            <div class="">#${c} created in ${tasksTables[i].date}</div>
            <div class="" title="${tasksTables[i].description}">${tasksTables[i].description.substring(0,70)+"..."}</div>
          </div>
          <div class="mb-3 mt-2">
            <span class="btn btn-primary ">${tasksTables[i].priority}</span>
            <span class="btn btn-secondary ">${tasksTables[i].type}</span>
          </div>
        </div>
      </div>

    </button>`
    } else if (tasksTables[i].status === "In Progress") {
      progressSection.innerHTML+=`<button name="clickedButton"  class="col-12 text-start btn-light text-black border-end-0 shadow-none" onclick="updateTask(${i})">
      <div class="row mt-2">
        <div class="col-1 ">
          <i class=" bi bi-arrow-clockwise text-green h1"></i>
        </div>
        <div class="col-11 ">
          <div class="h3">${tasksTables[i].title}</div>
          <div class="">
            <div class="">#${c} created in ${tasksTables[i].date}</div>
            <div class="" title="${tasksTables[i].description}">${tasksTables[i].description.substring(0,70)+"..."}</div>
          </div>
          <div class="mb-3 mt-2">
            <span class="btn btn-primary ">${tasksTables[i].priority}</span>
            <span class="btn btn-secondary ">${tasksTables[i].type}</span>
          </div>
        </div>
      </div>

    </button>`
    } else if (tasksTables[i].status === "Done")  {
      doneSection.innerHTML+=`<button name="clickedButton"   class="col-12 text-start btn-light text-black border-end-0 shadow-none" onclick="updateTask(${i})">
      <div class="row mt-2">
        <div class="col-1 ">
          <i class=" bi bi-check-circle text-green h1"></i>
        </div>
        <div class="col-11 ">
          <div class="h3">${tasksTables[i].title}</div>
          <div class="">
            <div class="">#${c} created in ${tasksTables[i].date}</div>
            <div class="" title="${tasksTables[i].description}">${tasksTables[i].description.substring(0,70)+"..."}</div>
          </div>
          <div class="mb-3 mt-2">
            <span class="btn btn-primary ">${tasksTables[i].priority}</span>
            <span class="btn btn-secondary ">${tasksTables[i].type}</span>
          </div>
        </div>
      </div>

    </button>`
      
    }

  }
}

function createTask() {
    // initialiser task form

    // Afficher le boutton save
    
    // Ouvrir modal form
}
function reloadTasks(){
  taskSection.innerHTML='';
  progressSection.innerHTML='';
  doneSection.innerHTML='';
  loadTasks();
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    )
    $('#modal-task').modal('hide');
    title.value= " ";
    type.checked=false;
    priority.value=" ";
    taskStatus.value=""
    date.value=" ";
    description.value=" ";
    console.log(tasksTables.length);
}
function saveTask() {

    
    let taskObject={
      'title'         :   title.value,
      'type'          :   getSelectedRadio(),
      'priority'      :   priority.value,
      'status'        :   taskStatus.value,
      'date'          :   date.value,
      'description'   :   description.value,
  
    }
     
    tasksTables[tasksTables.length]=taskObject;

    reloadTasks();

    

    
}
function editTask(index) {
    // let taskObject={
    //     'title'         :   title.value,
    //     'type'          :   getSelectedRadio(),
    //     'priority'      :   priority.value,
    //     'status'        :   taskStatus.value,
    //     'date'          :   date.value,
    //     'description'   :   description.value,
    //
    // }
     tasksTables[index].title=title.value;
     tasksTables[index].type=getSelectedRadio();
     tasksTables[index].priority=priority.value;
     tasksTables[index].status=taskStatus.value;
     tasksTables[index].date=date.value;
     tasksTables[index].description=description.values;
    //tasksTables[index]=taskObject;


     
}

function updateTask(i) {
    //deleteTask.classList.remove('d-none')
    $('#modal-task').modal('show');

    initTaskForm(i);
    updateTaskbtn.addEventListener('click', function() {
        editTask(i);


        reloadTasks();
    })



    //reloadTasks();

}

function deleteTask() {

}

function initTaskForm(index) {
    title.value=tasksTables[index].title;
    type.value=tasksTables[index].type;
    priority.value=tasksTables[index].priority;
    date.value=tasksTables[index].date;
    description.values=tasksTables[index].description;
}

function removeCheckedRadio(){

}
function getSelectedRadio(){
  let typeChecked;
  for(let i=0;i<type.length;i++){
    if(type[i].checked){
      typeChecked=type[i].value;
    }
  }
  return typeChecked;
}


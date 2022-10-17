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
let modalTask=document.getElementById("modal-task");

loadTables();
function loadTables() {
    var c;
  for (var i = 0; i < tasksTables.length; i++) {
    c=i+1;
        
    if (tasksTables[i].status == "To Do") {
      taskSection.innerHTML+=`<button class="col-12 text-start btn-light text-black border-end-0 shadow-none">
      <div class="row mt-2">
        <div class="col-1 ">
          <i class=" bi bi-exclamation-octagon text-red h1"></i>
        </div>
        <div class="col-11 ">
          <div class="h3">${tasksTables[i].title}</div>
          <div class="">
            <div class="">#${c} created in ${tasksTables[i].date}</div>
            <div class="" title="${tasksTables[i].description}">${tasksTables[i].description.substring(0,70)}</div>
          </div>
          <div class="mb-3 mt-2">
            <span class="btn btn-primary ">${tasksTables[i].priority}</span>
            <span class="btn btn-secondary ">${tasksTables[i].type}</span>
          </div>
        </div>
      </div>

    </button>`
    } else if (tasksTables[i].status == "In Progress") {
      progressSection.innerHTML+=`<button class="col-12 text-start btn-light text-black border-end-0 shadow-none">
      <div class="row mt-2">
        <div class="col-1 ">
          <i class=" bi bi-arrow-clockwise text-green h1"></i>
        </div>
        <div class="col-11 ">
          <div class="h3">${tasksTables[i].title}</div>
          <div class="">
            <div class="">#${c} created in ${tasksTables[i].date}</div>
            <div class="" title="${tasksTables[i].description}">${tasksTables[i].description.substring(0,70)}</div>
          </div>
          <div class="mb-3 mt-2">
            <span class="btn btn-primary ">${tasksTables[i].priority}</span>
            <span class="btn btn-secondary ">${tasksTables[i].type}</span>
          </div>
        </div>
      </div>

    </button>`
    } else if (tasksTables[i].status == "Done")  {
      doneSection.innerHTML+=`<button class="col-12 text-start btn-light text-black border-end-0 shadow-none">
      <div class="row mt-2">
        <div class="col-1 ">
          <i class=" bi bi-check-circle text-green h1"></i>
        </div>
        <div class="col-11 ">
          <div class="h3">${tasksTables[i].title}</div>
          <div class="">
            <div class="">#${c} created in ${tasksTables[i].date}</div>
            <div class="" title="${tasksTables[i].description}">${tasksTables[i].description.substring(0,70)}</div>
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
/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

 function createTask() {
    // initialiser task form

    // Afficher le boutton save
    
    // Ouvrir modal form
}

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    taskSection.innerHTML='';
    progressSection.innerHTML='';
    doneSection.innerHTML='';
    let typeChecked;
    for(let i=0;i<type.length;i++){
      if(type[i].checked){
        typeChecked=type[i].value;
      }
    }
    let taskObject={
      'title'         :   title.value,
      'type'          :   typeChecked,
      'priority'      :   priority.value,
      'status'        :   taskStatus.value,
      'date'          :   date.value,
      'description'   :   description.value,
  
    }
    tasksTables[tasksTables.length]=taskObject;
     
    loadTables();

    
}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}


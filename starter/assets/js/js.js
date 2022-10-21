// SCRIPT WHERE WE NEED THE ARRAY
//general variable section
let taskSection = document.getElementById("to-do-tasks");
let progressSection = document.getElementById("in-progress-tasks");
let doneSection = document.getElementById("done-tasks");
let title = document.getElementById("title");
let type = document.getElementsByName("type");
let priority = document.getElementById("priority");
let taskStatus = document.getElementById("status")
let date = document.getElementById("date");
let description = document.getElementById("Description");


loadTasks();

function loadTasks() {
    var c,t=0,p=0,d=0;
    for (var i = 0; i < tasksTables.length; i++) {
        c = i + 1;
        t++;
        if (tasksTables[i].status === "To Do") {

            taskSection.innerHTML += `<button name="clickedButton"   class="col-12 text-start btn-light text-black border-end-0 shadow-none" onclick="updateTask(${i})">
      <div class="row mt-2">
        <div class="col-1 ">
          <i class=" bi bi-exclamation-octagon text-red h1"></i>
        </div>
        <div class="col-11 ">
          <div class="h3">${tasksTables[i].title}</div>
          <div class="">
            <div class="">#${c} created in ${tasksTables[i].date}</div>
            <div class="" title="${tasksTables[i].description}">${tasksTables[i].description.substring(0, 70) + "...."}</div>
          </div>
          <div class="mb-3 mt-2">
            <span class="btn btn-primary ">${tasksTables[i].priority}</span>
            <span class="btn btn-secondary ">${tasksTables[i].type}</span>
          </div>
        </div>
      </div>

    </button>`
            $('#todoTitle').html(`<h4 class="">To do (<span >${t}</span>)</h4>`)
        } else if (tasksTables[i].status === "In Progress") {
            p++;
            progressSection.innerHTML += `<button name="clickedButton"  class="col-12 text-start btn-light text-black border-end-0 shadow-none" onclick="updateTask(${i})">
      <div class="row mt-2">
        <div class="col-1 ">
          <i class=" bi bi-arrow-clockwise text-green h1"></i>
        </div>
        <div class="col-11 ">
          <div class="h3">${tasksTables[i].title}</div>
          <div class="">
            <div class="">#${c} created in ${tasksTables[i].date}</div>
            <div class="" title="${tasksTables[i].description}">${tasksTables[i].description.substring(0, 70) + "...."}</div>
          </div>
          <div class="mb-3 mt-2">
            <span class="btn btn-primary ">${tasksTables[i].priority}</span>
            <span class="btn btn-secondary ">${tasksTables[i].type}</span>
          </div>
        </div>
      </div>

    </button>`
            $('#progressTitle').html(`<h4 class="">In Progress(<span >${p}</span>)</h4>`)
        } else if (tasksTables[i].status === "Done") {
            d++;
            doneSection.innerHTML += `<button name="clickedButton"   class="col-12 text-start btn-light text-black border-end-0 shadow-none" onclick="updateTask(${i})">
      <div class="row mt-2">
        <div class="col-1 ">
          <i class=" bi bi-check-circle text-green h1"></i>
        </div>
        <div class="col-11 ">
          <div class="h3">${tasksTables[i].title}</div>
          <div class="">
            <div class="">#${c} created in ${tasksTables[i].date}</div>
            <div class="" title="${tasksTables[i].description}">${tasksTables[i].description.substring(0, 70) + "...."}</div>
          </div>
          <div class="mb-3 mt-2">
            <span class="btn btn-primary ">${tasksTables[i].priority}</span>
            <span class="btn btn-secondary ">${tasksTables[i].type}</span>
          </div>
        </div>
      </div>

    </button>`
            $('#doneTitle').html(`<h4 class="">Done (<span >${d}</span>)</h4>`)
        }

    }
}

function createTask() {
    document.querySelector('#modelFooter').innerHTML = " "
    $('#title').val(' ')
    document.getElementById("feature").checked = false;
    document.getElementById("bug").checked = false;
    $('#priority').prop('selectedIndex', 0);
    $('#status').prop('selectedIndex', 0);
    date.value = ' ';
    $('#Description').val(' ')
    $('#modal-task').modal('show');
    $('#modelFooter').html(`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >cancel</button>
    <button type="button" class="btn  backgound-btn text-white" id="saveTaskBtn" onclick="saveTask()">Save</button>`)
}

function reloadTasks() {
    taskSection.innerHTML = '';
    progressSection.innerHTML = '';
    doneSection.innerHTML = '';
    loadTasks();
    title.value = " ";
    type.checked = false;
    priority.value = " ";
    taskStatus.value = ""
    date.value = " ";
    description.value = " ";
}

function saveTask() {
    let taskObject = {
        'title': title.value,
        'type': getSelectedRadio(),
        'priority': priority.value,
        'status': taskStatus.value,
        'date': date.value,
        'description': description.value,

    }

    tasksTables.push(taskObject);
    reloadTasks();
    $('#modal-task').modal('hide');
    Swal.fire(
        'Task Added!',
        'Successfully!',
        'success'
    )


}

function editTask(index) {
    let taskObject = {
        'title': title.value,
        'type': getSelectedRadio(),
        'priority': priority.value,
        'status': taskStatus.value,
        'date': date.value,
        'description': description.value,

    }
    tasksTables[index] = taskObject;
    reloadTasks()
    $('#modal-task').modal('hide');
    Swal.fire(
        'Task Updated!',
        'Successfully!',
        'success'
    )
}

function updateTask(i) {
    //deleteTask.classList.remove('d-none')
    $('#modal-task').modal('show');
    $('#modelFooter').html(`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >cancel</button>
    <button type="button" class="btn  btn-danger text-white " id="deleteTaskAfterCrud" onclick="deleteTask(${i})">Delete</button>
    <button type="button" class="btn  backgound-btn text-white" id="updateTaskCrud" onclick="editTask(${i})">Update</button>`);
    initTaskForm(i);


}

function deleteTask(index) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            tasksTables.splice(index, 1);
            $('#modal-task').modal('hide');
            reloadTasks();
            Swal.fire(
                'Deleted!',
                'Your task has been deleted.',
                'success'
            )
        }
    })


}

function initTaskForm(index) {
    title.value = tasksTables[index].title;
    if (tasksTables[index].type === "Feature") {
        document.getElementById("feature").checked = true;
        document.getElementById("bug").checked = false;
    } else {
        document.getElementById("feature").checked = false;
        document.getElementById("bug").checked = true;
    }

    priority.value = tasksTables[index].priority;
    taskStatus.value = tasksTables[index].status;
    date.value = tasksTables[index].date;
    $('#Description').val(tasksTables[index].description)
}

function getSelectedRadio() {
    let typeChecked;
    for (let i = 0; i < type.length; i++) {
        if (type[i].checked) {
            typeChecked = type[i].value;
        }
    }
    return typeChecked;
}


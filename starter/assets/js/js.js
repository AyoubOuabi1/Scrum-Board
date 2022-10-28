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

function createTask() {
    $('#tasktitle').html("Add Task")

    clearForm();
    $('#modal-task').modal('show');
    $('#modelFooter').html(`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >cancel</button>
    <button type="submit" name="save" class="btn  backgound-btn text-white" data-bs-dismiss="modal" id="saveTaskBtn" >Save</button>`)
}
function  clearForm(){
    $('#title').val(' ')
    document.getElementById("feature").checked = false;
    document.getElementById("bug").checked = false;
    $('#priority').prop('selectedIndex', 0);
    $('#status').prop('selectedIndex', 0);
    date.value = ' ';
    $('#Description').val(' ')
}
function reloadTasks() {
    taskSection.innerHTML = '';
    progressSection.innerHTML = '';
    doneSection.innerHTML = '';
    loadTasks();

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

function editeTask(i) {
    let taskObject = {
        'title': title.value,
        'type': getSelectedRadio(),
        'priority': priority.value,
        'status': taskStatus.value,
        'date': date.value,
        'description': description.value,

    }
    tasksTables[i] = taskObject;
    reloadTasks();
    $('#modal-task').modal('hide');
    Swal.fire(
        'Task Updated!',
        'Successfully!',
        'success'
    )
}

function update(i) {
    let d=document.getElementById(i+'');
    let e=d.getAttribute('data-form');
    //let h=d[i].getAttribute('data-form');
    console.log(e)
    let arr=e.split(',');
    initTaskForm(arr);
    $('#idd').val(i+'');
    $('#modal-task').modal('show');
    $('#modelFooter').html(`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >cancel</button>
    <button type="submit" name="delete" class="btn  btn-danger text-white " id="deleteTaskAfterCrud"  >Delete</button>
    <button type="submit" name="update" class="btn  backgound-btn text-white" id="updateTaskCrud"  ">Update</button>`);
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



        }
    })


}

function initTaskForm(data) {
    clearForm();
    title.value = data[1];
    if (data[2] === "Feature") {
        document.getElementById("feature").checked = true;
        document.getElementById("bug").checked = false;
    } else {
        document.getElementById("feature").checked = false;
        document.getElementById("bug").checked = true;
    }
    if(data[3]==="Low"){
        priority.value = 1;
    }else if(data[3]==="Meduim"){
        priority.value = 2;
    }else if(data[3]==="High"){
        priority.value = 3;
    }
    if(data[4]==="To Do"){
        taskStatus.value = 1;
    }else if(data[4]==="In Progress"){
        taskStatus.value = 2;
    }else if(data[4]==="Done"){
        taskStatus.value = 3;
    }
    let dt=data[5].split(' ');
    date.value=dt[0];
   // $('#fDate').val(dt[0])
    $('#Description').val(data[6])
    //date.value = tasksTables[index].date;

}
function  getDataWithAjax(){

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
let dropIndex;
function dragTask(index) {
    dropIndex = index;
}
function allowDrop(element){
    element.preventDefault();
}
function changeStatusToDo() {
    tasksTables[dropIndex].status ="TO DO";
    reloadTasks()
}
function changeStatusProgress() {
    tasksTables[dropIndex].status ="In Progress";
    reloadTasks()

}
function changeStatusDone() {
    tasksTables[dropIndex].status ="Done";
    reloadTasks()

}


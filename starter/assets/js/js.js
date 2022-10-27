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

    document.getElementById("feature").checked = false;
    document.getElementById("bug").checked = false;
    $('#priority').prop('selectedIndex', 0);
    $('#status').prop('selectedIndex', 0);
    date.value = ' ';
    $('#Description').val(' ')
    $('#modal-task').modal('show');
    $('#modelFooter').html(`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >cancel</button>
    <button type="submit" name="save" class="btn  backgound-btn text-white" data-bs-dismiss="modal" id="saveTaskBtn" >Save</button>`)
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
    console.log(i)
    let v='#'+i;
    console.log(v)
    let ar = $(${v}).data('stuff');
    console.log(ar);
    $('#idd').val(i+'');
    $('#modal-task').modal('show');
    $('#modelFooter').html(`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >cancel</button>
    <button type="submit" name="delete" class="btn  btn-danger text-white " id="deleteTaskAfterCrud"  >Delete</button>
    <button type="button" name="update" class="btn  backgound-btn text-white" id="updateTaskCrud"  ">Update</button>`);
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

            $.ajax({
                type: "GET", //we are using GET method to get data from server side
                url: 'delete.php', // get the route value
                data: {deleteId:index}, // get the route value
                success: function (response) {//once the request successfully process to the server side it will return result here
                    // Reload lists of employees



                    $('#modal-task').modal('hide');

                    Swal.fire(
                        'Deleted!',
                        'Your task has been deleted.',
                        'success'
                    )
                },
                error : function (e) {
                    alert(e.errorDetail)

                }
            });


        }
    })


}

function initTaskForm(data) {
    title.value = data[1];
    if (data[2] === "Feature") {
        document.getElementById("feature").checked = true;
        document.getElementById("bug").checked = false;
    } else {
        document.getElementById("feature").checked = false;
        document.getElementById("bug").checked = true;
    }

    priority.value = data[3];
    taskStatus.value = data[4];
    //date.value = tasksTables[index].date;
    $('#Description').val(data[5])
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


var date = new Date();
 let newtasks=[
    {
        title:"Keep all the updated requirements in one place",
        date: "#1 created in "+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate(),
        description : `There is hardly anything more frustrating than
        having to look for current requirements in tens of comments under
        the actual description or having to decide which commenter is
        actually authorized to change the requirements. The goal here is
        to keep all the up-to-date requirements and details in the
        main/primary description of a task. Even though the information in
        comments may affect initial criteria, just update this primary
        description accordingly.`,
        type: "feature",
        priority:"low",
        taskStatus:"TO DO"
    },{
        title:"Keep all the updated requirements in one place",
        date: "#1 created in "+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate(),
        description : `There is hardly anything more frustrating than
        having to look for current requirements in tens of comments under
        the actual description or having to decide which commenter is
        actually authorized to change the requirements. The goal here is
        to keep all the up-to-date requirements and details in the
        main/primary description of a task. Even though the information in
        comments may affect initial criteria, just update this primary
        description accordingly.`,
        type: "feature",
        priority:"low",
        taskStatus:"PROGRESS"

    },{
        title:"Keep all the updated requirements in one place",
        date: "#1 created in "+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate(),
        description : `There is hardly anything more frustrating than
        having to look for current requirements in tens of comments under
        the actual description or having to decide which commenter is
        actually authorized to change the requirements. The goal here is
        to keep all the up-to-date requirements and details in the
        main/primary description of a task. Even though the information in
        comments may affect initial criteria, just update this primary
        description accordingly.`,
        type: "feature",
        priority:"low",
        taskStatus:"TO DO"

    },{
        title:"Keep all the updated requirements in one place",
        date: "#1 created in "+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate(),
        description : `There is hardly anything more frustrating than
        having to look for current requirements in tens of comments under
        the actual description or having to decide which commenter is
        actually authorized to change the requirements. The goal here is
        to keep all the up-to-date requirements and details in the
        main/primary description of a task. Even though the information in
        comments may affect initial criteria, just update this primary
        description accordingly.`,
        type: "feature",
        priority:"low",
        taskStatus:"TO DO"

    },{
        title:"Keep all the updated requirements in one place",
        date: "#1 created in "+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate(),
        description : `There is hardly anything more frustrating than
        having to look for current requirements in tens of comments under
        the actual description or having to decide which commenter is
        actually authorized to change the requirements. The goal here is
        to keep all the up-to-date requirements and details in the
        main/primary description of a task. Even though the information in
        comments may affect initial criteria, just update this primary
        description accordingly.`,
        type: "feature",
        priority:"low",
        taskStatus:"DONE"

    }
 ]
 console.log(newtasks);
 
let taskSection=document.getElementById("to-do-tasks");
let progressSection=document.getElementById("in-progress-tasks");
let doneSection=document.getElementById("done-tasks");


function loadTables(){
    let btn= document.createElement('button');
    //add bootstrap classes into button 
    btn.classList.add('col-12', 'text-start', 'btn-light', 'text-black', 'border-end-0', 'shadow-none');
    let Div=document.createElement('div');
    Div.classList.add('row', 'mt-2');
    let iconDiv=document.createElement('div');
    iconDiv.classList.add("col-1");
    let icon=document.createElement('i');
    let dataDiv=document.createElement('div');
    dataDiv.classList.add("col-11");
    let titleDiv=document.createElement('div');
    titleDiv.classList.add("h3");
    let infosDiv=document.createElement('div');
    let dateDiv=document.createElement('div');
    let desDiv=document.createElement('div');
    let typeDiv=document.createElement('div');
    typeDiv.classList.add('mb-3', 'mt-2');
    let prioritySpan=document.createElement('span');
    prioritySpan.classList.add('btn', 'btn-primary')
    let typeSpan=document.createElement('span');
    typeDiv.classList.add('btn', 'btn-secondary');
    for(var i=0;i<newtasks.length;i++){
       btn.appendChild(Div);
       Div.appendChild(iconDiv);
       iconDiv.appendChild(icon);
    
       Div.appendChild(dataDiv);
       dataDiv.appendChild(titleDiv);
       dataDiv.appendChild(infosDiv);
       infosDiv.appendChild(dateDiv);
       infosDiv.appendChild(desDiv);
       dataDiv.appendChild(typeDiv);
       typeDiv.appendChild(prioritySpan);
       typeDiv.appendChild(typeSpan);
        console.log(newtasks[i].title)
       titleDiv.innerHTML=newtasks[i].title;
       dataDiv.innerHTML=newtasks[i].date;
       desDiv.innerHTML=newtasks[i].description.substring(0,70)+"...";
       prioritySpan.innerHTML=newtasks[i].priority;
       typeSpan.innerHTML=newtasks[i].type;
       if(newtasks[i].taskStatus=="TO DO"){
            taskSection.appendChild(btn);
            icon.classList.add('bi', 'bi-exclamation-octagon', 'text-red', 'h1');

       }else if(newtasks[i].taskStatus=="PROGRESS"){
            progressSection.appendChild(btn);
            icon.classList.add('bi', 'bi-arrow-clockwise', 'text-green', 'h1');

       }else {
            doneSection.appendChild(btn);
            icon.classList.add('bi', 'bi-check-circle', 'text-green', 'h1');

       }

    }
}

 function AddTask(){
    alert("work");
 }
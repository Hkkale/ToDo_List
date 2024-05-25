let mycontUL= document.getElementById("Ul_ele");


let Myobj = [

    
        {
            Todo :"HTML",
            id : 1
        },
        
        {
            Todo :"CSS",
            id : 2
        },
        
        {
            Todo :"JavaScript",
            id : 3
        }

    ]



for (const mytodo of Myobj) {

    appendItems(mytodo);
    
}


function appendItems(mytodo){

    let li_EL = document.createElement("li");
    li_EL.classList.add("li_class");
    mycontUL.appendChild(li_EL);

    let checkboxEL = document.createElement("input");
    checkboxEL.classList.add("check_class");
    checkboxEL.type="checkbox";
    let todo_id ="mycheckbox"+ mytodo.id;
    checkboxEL.id=todo_id;
    li_EL.appendChild(checkboxEL);

    let labelEl= document.createElement("label");
    labelEl.classList.add("label_class");
    labelEl.htmlFor=todo_id;
    li_EL.appendChild(labelEl);

    let titleEl= document.createElement("p");
    titleEl.classList.add("p_class");
    titleEl.textContent=mytodo.Todo;
    labelEl.appendChild(titleEl)

    let iconEl = document.createElement("i");
    iconEl.classList.add("fa-solid" , "fa-trash","i_class");
    li_EL.appendChild(iconEl);
    
}
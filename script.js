let mycontUL= document.getElementById("Ul_ele");
let inputEl = document.getElementById("inputEL");
let errorEl = document.getElementById("err_msg");





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

function addstrike(titleId,check_id){
    let checkboxEL= document.getElementById(check_id);
    let titleEl = document.getElementById(titleId);

    if(checkboxEL.checked){
        titleEl.style.textDecoration="Line-through"
    }
    else{
        titleEl.style.textDecoration="none"

    }


}


function appendItems(mytodo){
    let todo_id ="parent"+ mytodo.id;
    let check_id = "mycheckbox"+ mytodo.id;
    let titleId = "title"+ mytodo.id;



    let li_EL = document.createElement("li");
    li_EL.classList.add("li_class");
    li_EL.id=todo_id;
    mycontUL.appendChild(li_EL);

    let checkboxEL = document.createElement("input");
    checkboxEL.onclick= ()=>{
        addstrike(titleId,check_id);
    }
    checkboxEL.classList.add("check_class");
    checkboxEL.type="checkbox";
    
    checkboxEL.id=check_id;
    li_EL.appendChild(checkboxEL);

    let labelEl= document.createElement("label");
    labelEl.classList.add("label_class");
    labelEl.htmlFor=check_id;
    li_EL.appendChild(labelEl);

    let btnEl =  document.createElement("button");
    btnEl.classList.add("btnEl_class");
    li_EL.appendChild(btnEl);

    let titleEl= document.createElement("p");
    titleEl.classList.add("p_class");
    titleEl.id=titleId
    titleEl.textContent=mytodo.Todo;
    labelEl.appendChild(titleEl)

    let iconEl = document.createElement("i");
    iconEl.classList.add("fa-solid" , "fa-trash","i_class");
    btnEl.appendChild(iconEl);

    btnEl.onclick = ()=>{
        removeItem(todo_id);
        
    }
    
}


function AddItem(){

    if(inputEl.value===""){
        errorEl.textContent="Enter Task"
        errorEl.style.color="red";
    }
    else{
        errorEl.textContent="";

        let newobj={
            Todo:inputEl.value,
            id: Myobj.length+1
        }

        Myobj.push(newobj);
        appendItems(newobj);

        inputEl.value="";

    }
    
}

function removeItem(todo_id){
    let deleteItem = document.getElementById(todo_id);
    

    mycontUL.removeChild(deleteItem);

}
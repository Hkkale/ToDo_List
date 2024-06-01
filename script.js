let mycontUL = document.getElementById("Ul_ele");
let inputEl = document.getElementById("inputEL");
let errorEl = document.getElementById("err_msg");

let Myobj = JSON.parse(localStorage.getItem("mytodo"));

let locl_id;
function loc() {
  locl_id = locl_id + 1;
  return locl_id;
}

if (Myobj === null) {
  Myobj = [];
  locl_id = 0;
} else {
  locl_id = Myobj.length;
  console.log(locl_id);
  for (const todo of Myobj) {
    appendItems(todo);
  }
}

function AddItem() {
  if (inputEl.value === "") {
    errorEl.textContent = "Enter Task";
    errorEl.style.color = "red";
  } else {
    errorEl.textContent = "";

    let newobj = {
      Todo: inputEl.value,
      id: loc(),
      ischecked: false,
    };

    appendItems(newobj);
    Myobj.push(newobj);

    let localarr = JSON.stringify(Myobj);
    localStorage.setItem("mytodo", localarr);
    inputEl.value = "";
  }
}

function appendItems(mytodo) {
  let todo_id = "parent" + mytodo.id;
  let check_id = "mycheckbox" + mytodo.id;
  let titleId = "title" + mytodo.id;

  let li_EL = document.createElement("li");
  li_EL.classList.add("li_class");
  li_EL.id = todo_id;
  mycontUL.appendChild(li_EL);

  let checkboxEL = document.createElement("input");
  checkboxEL.onclick = () => {
    let checked = addstrike(titleId, check_id);
    mytodo.ischecked = checked;
    updateLocalStorage();
  };
  checkboxEL.classList.add("check_class");
  checkboxEL.type = "checkbox";
  checkboxEL.id = check_id;
  checkboxEL.checked = mytodo.ischecked;

  li_EL.appendChild(checkboxEL);

  let labelEl = document.createElement("label");
  labelEl.classList.add("label_class");
  labelEl.htmlFor = check_id;
  li_EL.appendChild(labelEl);

  let btnEl = document.createElement("button");
  btnEl.classList.add("btnEl_class");
  li_EL.appendChild(btnEl);

  let titleEl = document.createElement("p");
  titleEl.classList.add("p_class");
  titleEl.id = titleId;
  titleEl.textContent = mytodo.Todo;
  labelEl.appendChild(titleEl);

  if (mytodo.ischecked) {
    titleEl.style.textDecoration = "line-through";
  }

  let iconEl = document.createElement("i");
  iconEl.classList.add("fa-solid", "fa-trash", "i_class");
  btnEl.appendChild(iconEl);

  btnEl.onclick = () => {
    removeItem(todo_id);
    Myobj = Myobj.filter((item) => item.id !== mytodo.id);
    updateLocalStorage();
  };
}

function addstrike(titleId, check_id) {
  let checkboxEL = document.getElementById(check_id);
  let titleEl = document.getElementById(titleId);

  if (checkboxEL.checked === true) {
    titleEl.style.textDecoration = "line-through";
    return true;
  } else {
    titleEl.style.textDecoration = "none";
    return false;
  }
}

function removeItem(todo_id) {
  let deleteItem = document.getElementById(todo_id);
  mycontUL.removeChild(deleteItem);
}

function updateLocalStorage() {
  let localarr = JSON.stringify(Myobj);
  localStorage.setItem("mytodo", localarr);
}

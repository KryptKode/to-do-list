const input = document.getElementById("addText");
const btn = document.getElementById("addBtn");
const list = document.getElementById("list");
const todo = [];

function addTodo() {
  if(input.value){
    todo.push(input.value.trim());
    input.value = "";
  const listItem = document.createElement("div");
  listItem.setAttribute("class", "item");
  
  const listItemCheck = document.createElement("div");
  listItemCheck.setAttribute("class", "check");
  listItemCheck.classList.add("uncheck");
  
  listItemCheck.addEventListener("click", () => {
    listItemCheck.classList.toggle("uncheck");
    listItemText.classList.toggle("crossed");
  });
  
  const listItemText = document.createElement("p");
  listItemText.setAttribute("class", "text");
  listItemText.classList.add("crossed");
  
  const listItemDel = document.createElement("div");
  listItemDel.setAttribute("class", "delete");
  listItemDel.textContent = "×";
  listItemDel.addEventListener("click", () => {
    listItem.style.display = "none";
    todo.splice(i);
  });
  
  for (var i = 0; i < todo.length; i++) {
    listItemText.innerHTML = todo[i];
    
    listItem.append(listItemCheck);
    listItem.append(listItemText);
    listItem.append(listItemDel);
    list.prepend(listItem);
  }
  const refresh = document.getElementById("refresh");
  refresh.addEventListener("click", () => {
    listItem.style.display = "none";
  });
  }
}









 
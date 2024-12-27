function addDoneButton(listItem) {
  const doneItem = document.createElement("button");
  doneItem.textContent = "Done";
  listItem.appendChild(doneItem);
  doneItem.addEventListener("click", () => {
    listItem.firstElementChild.style.color = "green";
  });
}

function clearList() {
  const unorderedList = document.querySelector("ol");
  unorderedList.textContent = "";
  document.getElementById("searchbox").value = "";
}

function addDeleteButton(listItem) {
  const deleteItem = document.createElement("button");
  deleteItem.textContent = "X";
  deleteItem.addEventListener("click", () => {
    const unorderedList = document.querySelector("ol");
    unorderedList.removeChild(listItem);
  });
  listItem.appendChild(deleteItem);
}

function addText(listItem) {
  const listText = document.createElement("span");
  listText.textContent = document.getElementById("searchbox").value;
  listText.style.cssText = "margin-right: 5px;";
  listItem.appendChild(listText);
}
function addListItem() {
  const unorderedList = document.querySelector("ol");
  const listItem = document.createElement("li");
  addText(listItem);
  addDoneButton(listItem);
  addDeleteButton(listItem);
  if(document.getElementById("searchbox").value != "")
    unorderedList.appendChild(listItem);
  document.getElementById("searchbox").value = "";
}

const sub = document.querySelector(".submit");
sub.addEventListener("click", () => addListItem());

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => clearList());
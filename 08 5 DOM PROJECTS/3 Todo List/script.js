const lists = [];

const listContainer = document.querySelector(".listContainer");
const addInput = document.querySelector("#addInput");
const addBtn = document.querySelector(".addBtn");
let divElem;

function renderList(arr) {
  listContainer.innerHTML = "";
  arr.map((obj) => {
    divElem = document.createElement("div");
    divElem.className = "list";
    divElem.innerHTML = `
       <p>${obj.task}</p>
       <button class="deleteBtn" onclick=handleDelete(${obj.id})>❌</button>
    `;

    listContainer.append(divElem);
  });
}

function handleAddBtn(event) {
  event.preventDefault();
  let obj = {
    id: Date.now(),
    task: addInput.value,
  };
  lists.push(obj);
  addInput.value = "";
  renderList(lists);
}

function handleDelete(id) {
  let index = lists.findIndex((item) => item.id === id);
  console.log(index);
  if (index !== -1) {
    lists.splice(index, 1); // remove from array
  }
  renderList(lists);
}

renderList(lists);
addBtn.addEventListener("click", handleAddBtn);






















const todoContainer = document.querySelector(".todoContainer");
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector(".addBtn");
const btnText = document.querySelector(".btnText");
const loader = document.querySelector(".loader");
const form = document.querySelector("form");

let API = "https://68a175266f8c17b8f5d9df33.mockapi.io/api/v1/todo";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  btnText.disabled = true;
  btnText.style.display = "none";
  loader.style.display = "inline-block";

  setTimeout(() => {
    btnText.disabled = false;
    btnText.style.display = "block";
    loader.style.display = "none";
  }, 1000);
});

addBtn.addEventListener("click", postData);

async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();

  if (data) {
    todoContainer.innerHTML = "";
    data.forEach((obj) => {
      let divElem = document.createElement("div");
      divElem.className = "todo";
      divElem.innerHTML = `
         <p>${obj.task}</p>
          <div>
              <button class="editBtn">
                <span class="btnText">Edit</span>
                <span style="display:none;" class="saveBtn">Save</span>
                <span class="loader" style="display:none;"></span>
              </button>
              <button class="deleteBtn">
                <span class="btnText">Delete</span>
                <span class="loader" style="display:none;"></span>
              </button>
          </div>
        `;

      // Edit functionality
      let editBtn = divElem.querySelector(".editBtn");
      editBtn.addEventListener("click", (event) => {
        let p = divElem.querySelector("p");

        let btnText = editBtn.querySelector(".btnText");
        let saveBtn = editBtn.querySelector(".saveBtn");
        let loader = editBtn.querySelector(".loader");

        // edit button is pressend
        if (saveBtn.style.display === "none") {
          btnText.style.display = "none";
          saveBtn.style.display = "inline-block";
          taskInput.value = p.textContent;
        } else {
          saveBtn.style.display = "none";
          updateData(obj.id);
          loader.style.display = "inline-block";
          loader.style.width = "11px";
          loader.style.height = "11px";

          setTimeout(() => {
            btnText.style.display = "inline-block";
            saveBtn.style.display = "none";
            loader.style.display = "none";
          }, 2000);
        }

        console.log(p.textContent);
        console.log(taskInput.textContent);
      });

      // Delete Functionality
      let deleteBtn = divElem.querySelector(".deleteBtn");
      deleteBtn.addEventListener("click", async (event) => {
        let btnText = deleteBtn.querySelector(".btnText");
        let loader = deleteBtn.querySelector(".loader");

        // button is pressend
        btnText.disabled = true;
        btnText.style.display = "none";
        loader.style.display = "inline-block";
        loader.style.width = "11px";
        loader.style.height = "11px";

        await deleteData(obj.id);
      });

      todoContainer.append(divElem);
    });
  }
}

// Post Data
async function postData() {
  let value = taskInput.value;

  let objData = {
    task: value.trim(),
  };

  if (value) {
    let response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objData),
    });

    form.reset();

    if (response.status === 201) {
      fetchData();
    }
  } else {
    alert("Enter task fields mandatory....");
  }
}

// Delete Data
async function deleteData(id) {
  let response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  console.log(response);
  if (response.status === 200) {
    fetchData();
  }
}

async function updateData(id) {
  let updateValue = taskInput.value;

  let response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task: updateValue }),
  });

  form.reset();
  if (response.status === 200) {
    fetchData();
  }
}
fetchData();


/* 
1) js async nahi hota h
2) js sync hota h bydefault
3) api call apka promise return karega aur bolega aage badho block mat karo data mai de dunga aayega to
4) async await
5) But agar apne function async bana diya hai toh async function ka behaviour kuch aisa hota hai ki agar aap uske andar fetch wagera use karte ho and await karte ho toh aage ka task wo tabtak nahi karega jabtak aapka async task complete nhi ho jata...
*/
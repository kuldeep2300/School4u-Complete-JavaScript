const Users = [
  {
    profile_image:
      "https://cdn.pixabay.com/photo/2025/07/31/20/00/woman-9747618_1280.jpg",
    name: "Komal Singh",
    email: "komalsign@nsw.gov.au",
  },
  {
    profile_image:
      "https://cdn.pixabay.com/photo/2021/09/03/13/32/portrait-6595821_1280.jpg",
    name: "Shalini Goacher",
    email: "shalinigoacher@ucsd.edu",
  },
  {
    profile_image:
      "https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_640.jpg",
    name: "Bernetta Blackaller",
    email: "bblackaller2@cbslocal.com",
  },
  {
    profile_image:
      "https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg",
    name: "Emanuel Ralton",
    email: "eralton3@github.io",
  },
  {
    profile_image:
      "https://cdn.pixabay.com/photo/2024/11/08/05/28/man-9182458_640.jpg",
    name: "Elana Beig",
    email: "ebeig4@si.edu",
  },
  {
    profile_image:
      "https://cdn.pixabay.com/photo/2024/12/13/10/23/woman-9264738_640.jpg",
    name: "Donni Gissing",
    email: "dgissing5@springer.com",
  },
  {
    profile_image:
      "https://cdn.pixabay.com/photo/2024/08/16/12/32/ai-generated-8973623_640.jpg",
    name: "Clerc Purnell",
    email: "cpurnell6@nytimes.com",
  },
  {
    profile_image:
      "https://cdn.pixabay.com/photo/2020/10/26/18/20/man-5688155_640.jpg",
    name: "Rohan Kumar",
    email: "rohankumar@latimes.com",
  },
  {
    profile_image:
      "https://cdn.pixabay.com/photo/2020/02/05/12/56/men-4821136_640.jpg",
    name: "Rohit Kumar",
    email: "rohitkumar@youtube.com",
  },
  {
    profile_image:
      "https://cdn.pixabay.com/photo/2024/07/26/01/48/men-8922497_640.jpg",
    name: "Ruijerd",
    email: "ruijerd@washingtonpost.com",
  },
];

const userContainer = document.querySelector(".userContainer");
const searchInput = document.querySelector("#searchInput");

const noUserFound = document.createElement("p");
noUserFound.style.color = "red";
noUserFound.style.marginTop = "5px";
noUserFound.style.display = "none"; // default hide
searchInput.insertAdjacentElement("afterend", noUserFound);

const renderedUsers = (arr) => {
  userContainer.innerHTML = "";
  arr.map((currObj) => {
    let { profile_image, name, email } = currObj;

    let divElem = document.createElement("div");
    divElem.className = "userItem";
    divElem.innerHTML = `
   <div class="image">
            <img
              src=${profile_image}
              alt="error loading image"
            />
          </div>
          <div class="userDetails">
            <h4>${name}</h4>
            <p>${email}</p>
          </div>
  `;

    userContainer.append(divElem);
  });
};

renderedUsers(Users); // initialize setup

const handleInputChange = (e) => {
  let value = e.target.value.toLowerCase();
  let filteredUsers = Users.filter((obj) => {
    let { email, name } = obj;

    return (
      email.toLowerCase().includes(value) || name.toLowerCase().includes(value)
    );
  });

  if (filteredUsers.length > 0) {
    renderedUsers(filteredUsers);
    noUserFound.style.display = "none";
  } else {
    renderedUsers([]);
    noUserFound.textContent = "No user found";
    noUserFound.style.display = "block";
  }
};

searchInput.addEventListener("input", handleInputChange);

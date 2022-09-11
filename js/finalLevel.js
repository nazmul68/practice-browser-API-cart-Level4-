// set single data/item in localStorage
const setDataById = (id, key) => {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  console.log(inputValue);
  localStorage.setItem(`${key}`, inputValue);
};

// remove single data/item from local storage
const removeDataByKey = (key) => {
  const remove = localStorage.removeItem(`${key}`);
};

// set all data as Object in localStorage
const setAllData = () => {
  const nameField = document.getElementById("name-field");

  const emailField = document.getElementById("email-field");

  const messageField = document.getElementById("message-field");
  const allDataObj = {
    name: nameField.value,
    email: emailField.value,
    message: messageField.value,
  };
  localStorage.setItem("allData", JSON.stringify(allDataObj));
  displayUserAllInfo();
};

// display user info or data from local Storage
const displayUserAllInfo = () => {
  const userAllInfo = localStorage.getItem("allData");
  const parsedAllInfo = JSON.parse(userAllInfo);
  console.log(parsedAllInfo);

  const ulContainer = document.getElementById("ul-container");
  ulContainer.textContent = ``;
  const ul = document.createElement("ul");
  for (const key in parsedAllInfo) {
    let { name, email, message } = parsedAllInfo;
    ul.innerHTML = `
      <li>Name : ${name}</li>
      <li>Email : ${email}</li>
      <li>Message : ${message}</li>
    `;
  }
  ulContainer.append(ul);
};
displayUserAllInfo();

// reset/clear all data from local Storage
const resetAllData = () => {
  localStorage.clear();
  displayUserAllInfo();
};

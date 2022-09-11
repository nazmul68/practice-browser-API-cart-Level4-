localStorage.setItem("name", "shakib khan");
localStorage.setItem("age", "21");

localStorage.removeItem("name");
localStorage.removeItem("age");

let testObject = { one: 1, two: 2, three: 3 };
let stringified = JSON.stringify(testObject);
localStorage.setItem("testObject", stringified);

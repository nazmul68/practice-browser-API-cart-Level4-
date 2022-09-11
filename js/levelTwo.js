const initialValueElement = document.getElementById("count-value");
const tasbeehCounter = () => {
  const initialValue = parseInt(initialValueElement.innerText);
  let sum = initialValue + 1;
  initialValueElement.innerText = sum;
  localStorage.setItem("tasbeehCount", sum);
  displayLsStoredNum();
};

const displayLsStoredNum = () => {
  const LsStoredNum = localStorage.getItem("tasbeehCount");

  if (LsStoredNum) {
    initialValueElement.innerText = LsStoredNum;
  }
};
displayLsStoredNum();

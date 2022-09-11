// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো।যোগ করতে গেলে parse করা লাগলে সেটা করো।তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও

const promptFuntion = () => {
  const number = prompt("Type a number please");
  if (number) {
    strToIntNum = parseInt(number);
    alert(strToIntNum + 200);
  }
};

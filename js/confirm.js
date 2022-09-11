// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও

const confirmFunction = () => {
  const isConfirm = confirm("do you want to see browser url?");
  if (isConfirm === true) {
    console.log(window.location.href);
  }
};

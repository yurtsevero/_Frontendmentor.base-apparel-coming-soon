let emailVal = /[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
let button = document.getElementById("button");
let errorMsg = document.getElementById("error-msg");
let errorIcon = document.getElementById("error-icon");

button.addEventListener("click", () => {
  let email = document.getElementById("email").value;

  if (!email == "") {
    if (emailVal.test(email)) {
      errorMsg.innerHTML = "Your Email Address was successfully submitted.";
      errorMsg.style.display = "block";
      errorMsg.style.color = "green";
      setTimeout(hideSuccessMsg, 5000);
    } else {
      errorMsg.innerHTML = "Please provide a valid email.";
      errorMsg.style.display = "block";
      errorIcon.style.display = "block";
      setTimeout(hideErrMsg, 5000);
    }
  } else {
    errorMsg.innerHTML = "Email Address can not be empty.";
    errorMsg.style.display = "block";
    errorIcon.style.display = "block";
    setTimeout(hideErrMsg, 5000);
  }
});

hideSuccessMsg = () => {
  hideErrMsg();
  errorMsg.style.color = "#f96464";
  document.getElementById("email").value = "";
};
hideErrMsg = () => {
  errorMsg.innerHTML = "";
  errorIcon.style.display = "none";
};

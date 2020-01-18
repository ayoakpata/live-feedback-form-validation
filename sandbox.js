const form = document.querySelector(".signup-form");

const feedback = document.querySelector(".feedback");

const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", e => {
  e.preventDefault();

  //validation
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    //feedback goood info
    feedback.textContent = "username is valid";
  } else {
    //feedback help info
    feedback.textContent = "username is invalid ";
  }
});

//live feedback
form.username.addEventListener("keyup", e => {
  // console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "valid");
  } else {
    form.username.setAttribute("class", "invalid");
  }
});

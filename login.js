const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username.trim() === "user" && password.trim() === "user") {
    window.location.assign("index.html")
  } else {
    alert("Invalid username or password. Please try again.");
  }

});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Input values
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  // Simple Validation
  if (email === "" || password === "") {
    errorMessage.textContent = "Please fill in all the fields!";
    return;
  }

  // Dummy Login Check
  if (email === "admin@example.com" && password === "password123") {
    errorMessage.style.color = "green";
    errorMessage.textContent = "Login successful!";
    // Redirect or perform additional tasks here
  } else {
    errorMessage.style.color = "red";
    errorMessage.textContent = "Invalid email or password!";
  }
});

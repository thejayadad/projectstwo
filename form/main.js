document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
  
    let hasError = false;
  
    // Email validation
    if (!email.value.includes("@") || !email.value.includes(".")) {
      email.classList.add("error");
      email.classList.remove("valid");
      emailError.textContent = "Please enter a valid email";
      emailError.style.display = "block";
      hasError = true;
    } else {
      email.classList.remove("error");
      email.classList.add("valid");
      emailError.textContent = "";
      emailError.style.display = "none";
    }
  
    // Password validation
    if (password.value.length < 6) {
      password.classList.add("error");
      password.classList.remove("valid");
      passwordError.textContent = "Password must be at least 6 characters";
      passwordError.style.display = "block";
      hasError = true;
    } else {
      password.classList.remove("error");
      password.classList.add("valid");
      passwordError.textContent = "";
      passwordError.style.display = "none";
    }
  
    // If no error, simulate successful submission
    if (!hasError) {
      alert("Login successful!");
    }
  });
  
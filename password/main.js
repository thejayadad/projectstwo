function generatePassword() {
 const length = 12;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      password += randomChar;
    }
  
    document.getElementById("password").textContent = password;
  
    // Hide "Copied!" if it's visible
    document.getElementById("copiedMsg").classList.remove("show");
  }
  
  function copyPassword() {
    const password = document.getElementById("password").textContent;
  
    // Copy to clipboard
    navigator.clipboard.writeText(password).then(() => {
      const msg = document.getElementById("copiedMsg");
      msg.classList.add("show");
  
      // Hide after 2 seconds
      setTimeout(() => {
        msg.classList.remove("show");
      }, 2000);
    });
  }
  
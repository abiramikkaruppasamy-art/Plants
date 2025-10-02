
// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault();
  
//     let username = document.getElementById("username").value.trim();
//     let password = document.getElementById("password").value.trim();
//     let confirmPassword = document.getElementById("confirmPassword").value.trim();
  
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
  
//     alert("Welcome, " + username + "! You have successfully logged in.");
//   });
  
window.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("closeBtn");
  
    closeBtn.addEventListener("click", function() {
      
      if (window.history.length > 1) {
        window.history.back();
      } else {
        
        window.location.href = "../html/homepage.html";
      }
    });
  });
  
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }  
  
    alert("Welcome, " + username + "! You have successfully logged in.");
    window.location.href = "../html/homepage.html";  
  });
  
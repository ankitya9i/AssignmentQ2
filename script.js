var loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  errorMessage.textContent = '';

  // Validate email format for username
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(username)) {
    errorMessage.textContent = 'Please enter a valid email address';
    return;
  }

  // Validate password format
  const passwordRegex  = /^(?=.*[A-Z])(?=.*\d)[^!#$%^&*(),.?":{}|<>]*$/;

  if (!passwordRegex.test(password)) {
    errorMessage.textContent =
      'Password must contain an uppercase letter, a number, and only @ as a special character';
    return;
  }else{

  // Check for the specific password to show the dashboard
 
    errorMessage.textContent = 'Invalid password or username';
  }
});

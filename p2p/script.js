document.getElementById('loginBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const loginPopup = document.getElementById('loginPopup'); // Cache the element
    loginPopup.style.display = 'block';
    loginPopup.classList.add('active'); // Add a class to make close button visible
  });
  
  document.querySelector('.closeBtn').addEventListener('click', function() {
    const loginPopup = document.getElementById('loginPopup'); 
    loginPopup.style.display = 'none';
    loginPopup.classList.remove('active'); // Remove the class
  });
  
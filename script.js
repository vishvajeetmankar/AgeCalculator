document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault()
  })
  
  function calculateAge() {
      var birthdateInput = document.getElementById('birthdate').value;
      
      if (!birthdateInput) {
        alert('Please enter your birthdate.');
        return;
      }
    
      var birthdate = new Date(birthdateInput);
      var today = new Date();
    
      var ageInMilliseconds = today - birthdate;
    
      var millisecondsInYear = 31536000000; // 1000ms * 60s * 60min * 24hr * 365 days
      var years = Math.floor(ageInMilliseconds / millisecondsInYear);
    
      var remainingMilliseconds = ageInMilliseconds % millisecondsInYear;
      var millisecondsInMonth = 2629746000; // Assuming 30.44 days in a month on average
      var months = Math.floor(remainingMilliseconds / millisecondsInMonth);
    
      var remainingDays = Math.floor((remainingMilliseconds % millisecondsInMonth) / (1000 * 60 * 60 * 24));
    
      var result = years + ' years, ' + months + ' months, ' + remainingDays + ' days.';
      document.getElementById('result').innerText = 'Your age is: ' + result;
    }
    

    




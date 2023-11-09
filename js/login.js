var logInForm = document.getElementById('logIn');
var emailForm = document.getElementById('form2Example1');
var passForm = document.getElementById('form2Example2');

logInForm.addEventListener('submit',function(e){
    e.preventDefault();

    if(emailForm.value == localStorage.getItem('email') && passForm.value == localStorage.getItem('password')){
       /* Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your account exisst . ',
            showConfirmButton: false,
            timer: 7000
          });*/
          alert("Your account exisst");
          window.location.href = "../index.html"; 
          
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Your account is woring . ',
            showConfirmButton: false,
            timer: 7000
          }); 
    }

});
var formRegister=document.getElementById("formRegister");
var formName=document.getElementById("form3Example1c");
var formEmail=document.getElementById("form3Example3c");
var formPass=document.getElementById("form3Example4c");
var formRepPass=document.getElementById("form3Example4cd");

formRegister.addEventListener('submit',function(e){
    e.preventDefault();
    if(formPass.value != formRepPass.value){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'is not password',
            showConfirmButton: false,
            timer: 7000
          });//end Swet Alert

    }//end if
    else{
        localStorage.setItem('name',formName.value);
        localStorage.setItem('email',formEmail.value);
        localStorage.setItem('password',formPass.value);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your account is created . ',
            showConfirmButton: false,
            timer: 7000
          });
    }
});


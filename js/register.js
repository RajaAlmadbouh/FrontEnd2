/*var formRegister=document.getElementById("formRegister");
var formName=document.getElementById("form3Example1c");
var formEmail=document.getElementById("form3Example3c");
var formPass=document.getElementById("form3Example4c");
var formRepPass=document.getElementById("form3Example4cd");
var usersData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [] ;
 
console.log(usersData);

formRegister.addEventListener('submit',function(e){
    e.preventDefault();

   // alert();
    if(formPass.value != formRepPass.value){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Password and Confirm Password are not the same',
            showConfirmButton: false,
            timer: 3000
          });//end Swet Alert

    }//end if
    else{
        //localStorage.setItem('name',formName.value);
        //localStorage.setItem('email',formEmail.value);
        //localStorage.setItem('password',formPass.value);

        let user = {
            name : formName.value,
            email : formEmail.value,
            password : formPass.value
        };

        console.log(user);
        console.log(usersData);   

        if(usersData != null){ 
        let isExiset=false;
        for(let i=0 ; usersData.length ; i++){
           // console.log(usersData[i]['email']);
            if(usersData[i]['email'] == formEmail.value){

                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'your Email is exiest',
                    showConfirmButton: false,
                    timer: 7000
                  
                  });//end Swet Alert
                  isExiset=false;
                  return ; 
            }
            else if (usersData[i]['name'] == formName.value){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'your Name is exiest',
                    showConfirmButton: false,
                    timer: 7000
                  
                  });//end Swet Alert
                   isExiset=false;
                  return ; 
            }
            else{
                isExiset=true;
            }//end else

        }//end for
        //console.log(isExiset)
        if(isExiset == true){
            console.log(uesr);
            usersData.push(user);
            localStorage.setItem('users',JSON.stringify(usersData));
    
            Swal.fire({
             position: 'center',
             icon: 'success',
             title: 'Your account is created . ',
             showConfirmButton: false,
             timer: 7000
          });
        }
    }// end if is not null

    else{
        console.log(uesr);
        console.log("hhhhhhhhh");
        //usersData = [];
        usersData.push(user);
        localStorage.setItem("users",JSON.stringify(usersData));
        console.log(localStorage.getItem('users'));

        Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Your account is created . ',
         showConfirmButton: false,
         timer: 7000
      });
    };
}

    
        
    });   */

var regForm = document.getElementById('formRegister');
var nameForm = document.getElementById('form3Example1c');
var emailForm = document.getElementById('form3Example3c');
var passwordForm = document.getElementById('form3Example4c');
var confirmPasswordForm = document.getElementById('form3Example4cd');
var usersData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [] ;
console.log(usersData);
regForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let password = passwordForm.value;

    
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;

    
    if (
        password.length <= minLength ||
        !uppercaseRegex.test(password) ||
        !lowercaseRegex.test(password) ||
        !digitRegex.test(password) ||
        !symbolRegex.test(password)
    ) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Password must have at least 8 characters, including at least one uppercase letter, one lowercase letter, one symbol, and one number.',
            showConfirmButton: false,
            timer: 6000
        });
        return;
    }


    if (passwordForm.value != confirmPasswordForm.value) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Password and Confirm Password are not the same',
            showConfirmButton: false,
            timer: 6000
        });
    } else {
        let user = {
            name: nameForm.value,
            email: emailForm.value,
            password: passwordForm.value
        };

        if (usersData != null) {
            let isEmailExist = false;
            let isNameExist = false;

            for (let i = 0; i < usersData.length; i++) {
                if (usersData[i]['email'] == emailForm.value) {
                    isEmailExist = true;
                    break;
                }
            }

            for (let i = 0; i < usersData.length; i++) {
                if (usersData[i]['name'] == nameForm.value) {
                    isNameExist = true;
                    break;
                }
            }

            if (isEmailExist) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Email already exists',
                    showConfirmButton: false,
                    timer: 6000
                });
            } else if (isNameExist) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Name already exists',
                    showConfirmButton: false,
                    timer: 6000
                });
            } else {
                usersData.push(user);
                localStorage.setItem('users', JSON.stringify(usersData));
                console.log(localStorage.getItem('users'));
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your account was created successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } else {
            usersData.push(user);
            localStorage.setItem('users', JSON.stringify(usersData));
            console.log(localStorage.getItem('users'));
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your account was created successfully',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
});


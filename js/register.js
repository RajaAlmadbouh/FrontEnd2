var formRegister=document.getElementById("formRegister");
var formName=document.getElementById("form3Example1c");
var formEmail=document.getElementById("form3Example3c");
var formPass=document.getElementById("form3Example4c");
var formRepPass=document.getElementById("form3Example4cd");
var usersData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [] ;
 


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
        //localStorage.setItem('name',formName.value);
        //localStorage.setItem('email',formEmail.value);
        //localStorage.setItem('password',formPass.value);

        let user = {
            name : formName.value,
            email : formEmail.value,
            password : formPass.value
        };


        if(usersData != null){ 
        let isExiset=false;
        for(let i=0 ; usersData.length ; i++){
            if(usersData[i]['email'] == formEmail.value){

                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'your Email is exiest',
                    showConfirmButton: false,
                    timer: 7000
                  
                  });//end Swet Alert
                  let isExiset=false;
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
                  let isExiset=false;
                  return ; 
            }
            else{
                let isExiset=true;

               
                
            }//end else
        }//end for
        
        if(isExiset == true){
            usersData.push(user);
            localStorage.setItem("users",JSON.stringify(usersData));
    
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
    }

    
        
    }
});


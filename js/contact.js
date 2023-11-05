var contactForm=document.getElementById("contactForm");
var nameForm = document.getElementById("name");
var emailForm = document.getElementById("email");
var subjectForm = document.getElementById("subject");

contactForm.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your name'+ nameForm.value + 'and your email ' + emailForm.value + 'and your subject is '+ subjectForm.value,
        showConfirmButton: false,
        timer: 7000
      });
      location.replace("../index.html");
    }

);
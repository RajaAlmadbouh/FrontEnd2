var userName = document.getElementById("userName");
userName.innerHTML = localStorage.getItem('name');

var loginOrOut = document.getElementById("loginOrOut");



if(localStorage.getItem("name") != null){
    loginOrOut.innerHTML = 'LogOut';

    

}
else{
    alert("you are not a user please a login");
    location.replace("../pages/login.html");
}

function clearLocalStorage(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
        location.replace("../pages/login.html");
        
    }
var userName = document.getElementById("userName");
userName.innerHTML = localStorage.getItem('name');

var loginOrOut = document.getElementById("loginOrOut");



if(localStorage.getItem("name") != null){
    loginOrOut.innerHTML = 'LogOut';

    function clearLocalStorage(){
        localStorage.clear();
        location.replace("../pages/login.html");
        
    }

}
else{
    alert("you are not a user please a login");
    location.replace("../pages/login.html");
}
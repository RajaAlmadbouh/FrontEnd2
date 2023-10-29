//alert("raja");

var name = "Raja";
let age = 24 ; 
const isMarried = false;
const salary = 1000.5;
const skills = ["html","css","js"];
var parson = {
    name: "Raja",
    age: 25,
    isMarried:false,
    salary:1000.5,
    skills:["html","css","js"]

};

console.log(typeof(name),"name : ",name);
console.log(typeof(age),"age : ",age);
console.log(typeof(isMarried),"isMarried : ",isMarried);
console.log(typeof(salary),"salary : ",salary);
console.log(typeof(skills),"skills : ",skills);
console.log(typeof(parson),"parson : ",parson);

function calculate (num1,num2){
    let sum=num1+num2;
    console.log(sum);
    return sum;
}

console.log(calculate(20,23));
calculate(30,20);
//console.log(sum);

var body=document.getElementsByTagName('body');
var heder= document.getElementById("headerDiv");
var aLink1= document.getElementById("headerLinks");
var footer= document.getElementById("footerDiv");
//var h11 = heder.getElementsByTagName("h1");
//var aLink2= aLink1.getElementsByTagName("a");
//console.log(h11[0].style.color);
//console.log(aLink1.getElementsByTagName("a")[0].style.color);
//console.log(body[0].style.backgroundColor);

function changeBackground(){
    //Light style
    if(body[0].style.backgroundColor=='black'){
        //channge heder
        body[0].style.backgroundColor='white';
        heder.style.backgroundColor='#1a1a1a';
        heder.getElementsByTagName("h1")[0].style.color="#fff";
        for(let i=0 ; i<aLink1.getElementsByTagName("a").length ; i++){
            aLink1.getElementsByTagName("a")[i].style.color = "#fff";
            aLink1.getElementsByTagName("a")[i].style.backgroundColor = "gray";
            aLink1.getElementsByTagName("a")[i].style.border = "1px solid #fff";
        }
        //change footer
        footer.style.backgroundColor = "#1a1a1a";
        footer.getElementsByTagName("p")[0].style.color="white";

    }
    //Dark style
    else{
        //change heder
        body[0].style.backgroundColor='black';
        heder.style.backgroundColor='#414048';
        heder.getElementsByTagName("h1")[0].style.color="#D9D8E6";
        for(let i=0 ; i<aLink1.getElementsByTagName("a").length ; i++){
            aLink1.getElementsByTagName("a")[i].style.color = "black"
            aLink1.getElementsByTagName("a")[i].style.backgroundColor = "#C0BFC4";
            aLink1.getElementsByTagName("a")[i].style.border = "1px solid black";
        }
        //change footer
        footer.style.backgroundColor = "#414048";
        footer.getElementsByTagName("p")[0].style.color="#CFCED9";

    }
}


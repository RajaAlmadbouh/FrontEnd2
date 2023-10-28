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

var body=document.getElementsByTagName('body')
//console.log(body[0].style.backgroundColor);

function changeBackground(){
    if(body[0].style.backgroundColor=='red'){
        body[0].style.backgroundColor='pink';
    }
    else{
        body[0].style.backgroundColor='red';
    }
}


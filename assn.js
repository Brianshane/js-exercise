const fullName="brian cheruiyot";
let age=23;
var enrolled =true;

console.log(fullName);
console.log(typeof fullName);
console.log(age);
console.log(typeof age);
console.log(enrolled);
console.log(typeof enrolled);
//quiz 2
let numString="5";
let num=5;
console.log(numString+num);
console.log(num*numString);


//quiz three
let hisAge = 25;

if (hisAge < 5) {
    console.log("Free entry");
} else if (hisAge >= 5 && age <= 17) {
    console.log("Child discount");
} else if (hisAge >= 18 && age <= 64) {
    console.log("Full price");
} else {
    console.log("Senior discount");
}
//quizz 4

let accBalance;
if(accBalance<0){
    console.log("account overdrawn");
}
else {
    console.log("account active")
}

//quizz 5
let test;
switch(test){

    case  test>=90 :
        console.log("grade A");
    break;
    case test>=80 :
        console.log("grade B");
        break;
        case test>=60 :
            console.log("grade C");
            break;
            case test<60 :
                console.log("grade D");
                break;
                default:
                    console.log("please input grade");
                    

}
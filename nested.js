
let number = 500;
function outerFn(){
    const num=100;
    function innerFn(){
        const num2=200;
        return num+num2;
}
return innerFn();+num;
}
console.log(outerFn());
const name="jane doe";
function learningScope(){
    const name="john doe";
    function greeting (){
        const hello=`hello ${name}`;
        const age=30;
        return `${hello} you are ${age} years old`;
    }
    return greetings();
    }
    console.log(learningScope());

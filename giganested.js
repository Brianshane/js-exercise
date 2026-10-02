const num=10;
const operations= (numI,numII)=>{
innerfn =(numI)=>{
    const numII=200;
    return numI+numII;
}
const innerFn2=(numII)=>{
    const numI=300;
    const innerfun=(numII)=>{
        const num=500;
        const innerfun1=()=>{
            const numIv=1000;
            return numIv+numII;
        };
        return innerfun1()+num+numII;
    };
    return innerfun(300)+numI;
}
return innerfn(500)+innerFn2(200)+num;

};
console.log(operations(300,200));


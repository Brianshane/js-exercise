function sayHi(fullname) {
    console.log(`Hello ${fullname}`);
}
function userProfile(fullName,username,phone,bio){
    return{
        fullName: fullName,
        username: username,
        phone: phone,
        bio: bio
    
    }

}
function main(){
    const user = userProfile("John Doe","johndoe123","123-456-7890","Software Developer");
    sayHi(user.fullName);
    console.log(`Username: ${user.username}`);
    console.log(`Phone: ${user.phone}`);
    console.log(`Bio: ${user.bio}`);
}
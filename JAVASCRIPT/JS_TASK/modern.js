import {user, greet} from "./user.js"
//On=bject destructuring
const {name, age, address} = user;
const hobbies= ["Coding", "Gaming"]
//spread operator
const allhobbies = [...hobbies,"Listening Music"]
//Rest parameters
function showUser(name, ...skills){
    console.log(`name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`Skills: ${skills}`)
}
showUser(name, ...allhobbies);
//Nullish Coalescing
const country = user.country ?? "India";
console.log(`Bio:  ${user.profile?.bio}`)
//short circuiting
const isLoggedIn =true;
isLoggedIn && console.log("User is logged in");
export default function variablesExample() {
 let name = 'Alice';
 name = 'Bob'; // Reassigning the variable

 let age = 25;

 let isStudent = true;

 let today = new Date();

 let person = {
   name: name,
   age: age,
   isStudent: isStudent,
   birthday: today
 };

 let greet = function () {
   console.log(`Hello, my name is ${person.name}, I am ${person.age} years old.`);
 }
    greet();


}
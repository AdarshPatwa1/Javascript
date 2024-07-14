const myobject ={
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}
 // for in loops are object specific
for (const key in myobject) {
   // console.log(`${key} shortcut is for ${myobject[key]}`);
}  // ${key}  is for key 
   // ${myobject[key]}  for value

   const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}  // same like object here is programming[key] for value of array

// const map = new Map()  // not possible because map is not iterable 
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);  // not possible because map is not iterable 
// }
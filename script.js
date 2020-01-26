
function each(collection, func) {
  if(typeof(collection) === "object") {
    if(Array.isArray(collection)) {
      for(let i = 0; i < collection.length; i++) {
        func(collection[i], i);
      }
    }else {
      for(let key in collection) {
        func(collection[key], key);
      }
    }
  }
}

function map(collection, f) {
  let acc = new Object();
    if(Array.isArray(collection)) {
      let acc = new Array();
      
    }
    
      each(collection, function(element, index) {
        acc[index] = f(element, index);
      }); 
    

    return acc;
}
/******************************************************/
/*
1.The incrementValues function from yesterday can be 
written much more elegantly using map. Rewrite that 
function using our new and improved version of map.
For convenience, the prompt is reproduced below:
Write a function called incrementValues that accepts
an object as a parameter, and outputs an object with
all of its numeric values incremented by one. You'll 
want to use the updated version of map for this, and
you will need to check the type of each value to determine
whether or not it should be incremented.

// incrementValues accepts an object as a parameter, 
and outputs an object with all of its numeric values
incremented by one.
*/
function incrementValues(object) {
  
  return map(object, function(element, index) {
    if(typeof(element) === "number") {
      element += 1;
    }
    return element;
  });
}
/*****************************************************/
/*
2.Write a function called uppercaseValues that, given an
object as a parameter, returns a new object with all of 
its string values converted to uppercase. You'll want to 
make use of .toUpperCase() for this:

 'hello'.toUpperCase(); // => 'HELLO'

Also, ensure that you only attempt to convert strings
to uppercase -- you may want to use typeof for this.
*/
function uppercaseValues(object) {
  
  return map(object, function(element, index) {
    if(typeof(element) === "string") {
      return element.toUpperCase();
    }
    return element;
  });
}
/*******************************************************/
/*
3.Write a function called countNestedKeys that, given 
an object where all values are also objects, returns an 
object that contains the count of keys in each nested
 object, e.g.

 function countNestedKeys(object) { 
       // TODO: Your code here 
 } 
 countNestedKeys({a: {b: 1, c: 7}, f: {h: 22, g: 12, i: 24}}); 
 // => {a: 2, f: 3}
 */
function countNestedKeys(object) {

  return map(object, function(element, index) {
    let count = 0;
    each(element, function(elem, index) {
      count++;
    });
    return count;
  });
}
/********************************************************/
/*
4.Write a function called agesToMinutes that, accepts
an array of object as parameter and return an array of 
objects after converting the ages from years to minutes

 var people = [{ 
       name: { 
             first: 'Majd', 
             middle: 'Eddin', 
       }, 
       age: 30 
       }, { 
       name: { 
             first: 'Fatima', 
             last: 'Himmamy' 
       }, 
       age: 26 
       }, { 
       name: { 
             first: 'Sahar', 
             middle: 'MHD' 
       }, 
       age: 27 
       }, { 
       name: { 
             first: 'Nour', 
             middle: 'Eddin', 
       }, 
       age: 15 
       }, { 
       name: { 
             first: 'Ahmad', 
             last: 'Awad' 
       }, 
       age: 33 
 }]; 
 function agesToMinutes(object){ 
       // To-Do code ..  
 } 
 agesToMinutes(people);  
*/
function agesToMinutes(arrayOfObjects) {

  return map(arrayOfObjects, function(element, index) {
    return map(element, function(elem, index) {
      if(index == "age") {
        elem *= 365 * 24 * 60;
      }
      return elem;
    });
  });
}
/***********************************************************/
/*
1. You're working in a company for securing solutions, one 
of your clients noticed that their system has been hacked
many times. The company saves its users information in
usersData array, When you analyzed the system, You noticed 
that the password criteria is not set at all.
You were asked to check users' account and flag and
give useful information for each one. If the user's 
password is less that 8 characters you should add a flag 
property for the user object with a false value, else it
will be true. You'll add another property called
passwordHealth it will be either (weak, normal or strong)
according to this criteria: Weak password: 
only small letters ,Normal password: small and numbers ,
strong password: small, capital, numbers and symbols.

 Hint: Using Regular Expressions will make your life easier :) 
 var usersData = [ 
{ user: {email: 'majd@rbk.org', password: '_majd(2017)'}}, 
{ user: {email: 'fatema@rbk.org', password: '12345'}}, 
{ user: {email: 'maher@rbk.org', password: 'M@her2017'}}, 
{ user: {email: 'sahar@rbk.org', password: 'saher2017'}} 
 ]; 
 function securityCheck(object){ 
       \ your code is here 
 } 
 securityCheck(usersData); // == > 
 [ 
{ user: {email: 'majd@rbk.org', password: '_majd(2017)', flag: true, passwordHealth: 'normal'}}, 
{ user: {email: 'fatema@rbk.org', password: '12345', flag: false, passwordHealth: 'weak'}}, 
{ user: {email: 'maher@rbk.org', password: 'M@her2017', flag: true, passwordHealth: 'strong'}}, 
{ user: {email: 'sahar@rbk.org', password: 'saher2017', flag: true, passwordHealth: 'normal'}}  ]; 

Hint: Using Regular Expressions will make your life easier :)

*/
function securityCheck(object) {
  objectCopied = new Object();
  let zeroToNine  = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
  let symbols = new Array( '&', '!', '~', '@', '"', '#', '{', '$', '(', '[', '-', '%', '`', '_', ')', ']', '+', '/', '*', '.', ',', '?', '§', '<', '>', 'µ', '£');
  let letter = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  let capitalLetter = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
 //   console.log(capitalLetter);
    let passwordHel = new Array('weak', 'normal', 'normal','strong');
 /* let checkPasswordStrength = {"rExists": zeroToNine, "lExists" :symbols, "cExists" : capitalLetter, "tExits": letter};  */
  let bringKeysBack = ["rExists", "lExists", "cExists", "tExits"];
  let checkPasswordStrength = {"rExists": zeroToNine, "lExists" :symbols, "cExists" : capitalLetter};
  return map(object, function(element, index) {
    each(element, function(value, user) {
     // console.log(value);
      value["flag"] = false; 
      value["passwordHealth"] = "weak";
      let isThere = 0;
      each (value, function(elem, index) {
      
        if( (index === "password") && (elem.length >= 8) ) {
          value["flag"] = true;
          isThere = 0;
          for(let i = 0; i < elem.length; i++) {
            for(let key in checkPasswordStrength) {
              let takeIt = checkPasswordStrength[key];
           //   console.log("checkPasswordStrength[key] = " + takeIt);
              for(let j = 0; j < takeIt.length; j++) {
              //  console.log("takeIt[j] = " + takeIt[j])
                if(takeIt[j] === elem[i]) {
                  checkPasswordStrength[key] = []; 
                   console.log("key+ = " + key);
                }
              }
            }
          }
          for(let key in checkPasswordStrength) {
            let takeItagain = checkPasswordStrength[key];
            if(takeItagain.length === 0) {
              isThere++;
              console.log("isThere = " + isThere);
            } 
          }
          checkPasswordStrength = {"rExists": zeroToNine, "lExists" :symbols, "cExists" : capitalLetter};
          value["passwordHealth"] = passwordHel[isThere];
       }
    });
   console.log(value);  
   return value;
  });
  return element;
});
}



var usersData = [ 
  { user: {email: 'majd@rbk.org', password: '_majd(2017)'}}, 
  { user: {email: 'fatema@rbk.org', password: '12345'}}, 
  { user: {email: 'maher@rbk.org', password: 'M@her2017'}}, 
  { user: {email: 'sahar@rbk.org', password: 'saher2017'}} 
];
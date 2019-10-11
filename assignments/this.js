/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.The window is what is referred to for anything in the global scope. Or the console for node.js. 
* 2. Implicit refers to the object that is using .this. It refers to the object before the '.' period.
* 3. New binding the .this is referring the new object that is being created with the constructor.
* 4. Explicit refers to the object that is being called or applied to by the methods .call or .apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myCar(car) {
    console.log(this);
    return car;
}

myCar('Subaru Outack');

// Principle 2

// code example for Implicit Binding
const myFav = {
    favDesert: 'tiramisu',
    favPairing: function(pairing) {
        console.log(`My favorite pairing with ${this.favDesert} is ${pairing}.`);
        console.log(this);
    }
};

myFav.favPairing('warm tea');

// Principle 3

// code example for New Binding
function newEmployee(jobClass) {
    this.department = 'Accounting',
    this.jobClass = jobClass;
    this.speak = function() {
        console.log(`Hello, I'm the new ${this.department} ${jobClass}.`);
        console.log(this);
    };
};

const robyn = new newEmployee('Manager');
const mani = new newEmployee('Associate');

robyn.speak();
mani.speak();

// Principle 4

// code example for Explicit Binding
robyn.speak.call(mani);
mani.speak.call(robyn);
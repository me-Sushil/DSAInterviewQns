//Javascript Interview Qna
// Basic JavaScript Questions with Answers


// ✅ HTML & CSS (with Sass)

// 1. Difference between id and class in HTML?
// id is unique and used to identify a single element, while class can be used for multiple elements.

// 2. Semantic HTML tags?
// Semantic HTML tags" are HTML elements that clearly describe their meaning or purpose in the content they enclose.
// Tags like <header>, <footer>, <article>, and <section> that give meaning to the content.

// 3.  Box model?
// Content → Padding → Border → Margin.

// 4. CSS Positioning Types?
// relative, absolute, fixed, sticky, and static.
// static > Behavior: Elements appear in the normal document flow (top to bottom)., Positioning properties (top, left, etc.) do not work., position: static;
/* relative> Behavior: Element stays in the normal flow but can be moved relative to its original position., Positioning properties work., position: relative;
top: 10px;   moves the element 10px down 
left: 20px;  moves it 20px to the right */
/* absolute > Behavior: Element is removed from the normal flow and positioned relative to the nearest positioned ancestor (relative, absolute, or fixed)., If no positioned ancestor, it’s relative to <html>.
position: absolute;
top: 0;
left: 0;*/

/* fixed> Behavior: Element is removed from the flow and positioned relative to the browser window (viewport)., Stays fixed even when scrolling.
position: fixed;
top: 0;
right: 0;
*/

/*
Behavior: Element behaves like relative until a certain scroll position is reached, then it behaves like fixed., Great for sticky headers.
position: sticky;
top: 0;
*/

// 5. Flexbox vs Grid?
// Flexbox is one-dimensional, Grid is two-dimensional layout system.

// 6. Centering a div both vertically and horizontally?
// Use Flexbox: (display: flex; justify-content: center; align-items: center;)

// 7. visibility: hidden vs display: none?
// visibility: hidden, hides element but keeps its space; display: none, removes it completely.

// 8. Media Queries?
// CSS technique to apply styles based on screen size.

// 9. Use of Sass?
//Sass > Syntactically Awesome Stylesheets > A CSS preprocessor for writing better CSS
// Adds variables, nesting, mixins to CSS for better structure and reuse.

// 10. Organizing CSS files?
// Modular structure using partials in Sass and BEM naming convention.

// 11. What is  CSS Specificity?
// Determines which style rule is applied; inline > id > class > element.

// 12. rem vs em vs px?
// px is absolute; em is relative to parent; rem is relative to root.


// 13. z-index usage?
// Controls stacking order of overlapping elements.


// 14. Pseudo-classes/elements?
// :hover, :first-child, ::before, ::after.

////////////////////////////////////////////////////////////////


// ✅ JavaScript (ES6+)

// 1. let vs const vs var?
// var is function-scoped, hoisted; let & const are block-scoped; const cannot be reassigned.


// 2. Hoisting?
// Variable and function declarations are moved to the top of their scope.

// 3. == vs ===?
// == compares values with type coercion; === compares value and type.

// 4. map(), filter(), reduce()?
// map: transforms array; filter: filters elements; reduce: accumulates values.

// 5. Event loop?
// Manages call stack and callback queue for asynchronous tasks.
// Call Stack: Where JavaScript runs code line by line.
// Callback Queue: Stores tasks that are waiting (like from setTimeout, fetch, etc.).

// 6. this keyword?
// Refers to the object that is executing the current function.

// 7. Template literals?
// Use backticks and ${} for embedded expressions.

// 8. Destructuring?
// Unpacks values from arrays or objects into variables.

// 9.  Error handling?
// Using try...catch blocks.

// 10. null vs undefined?
// null is intentional absence; undefined is uninitialized.


/////////////////////////////////////////////////////////////////


// ✅ React

// Functional vs Class components?
// Functional: simpler, use hooks; Class: use lifecycle methods.

// JSX?
// JavaScript + XML syntax used in React.

// State vs Props?
// State is local to a component. State = internal memory of a component to store data; Props are passed from parent.Used to send data or functions into a component

// React Hooks?
// Functions like useState, useEffect, useContext.

// useState?
// Manages local state in a functional component. Store data (useState)

// useEffect?
// Handles side effects like API calls, runs after render. Run code when something changes (useEffect)

// Handling forms?
// Controlled components with value and onChange handlers.

// Conditional rendering?
// Using ternary operators or logical && in JSX.
// The ternary operator is a shortcut for writing an if-else statement in one line.
// condition ? valueIfTrue : valueIfFalse;



// Keys in lists?
// Unique identifiers to optimize rendering.

// Virtual DOM?
// Lightweight copy of real DOM; it helps to React updates real DOM efficiently.
// When something changes (like a button click), React:
// Updates the Virtual DOM first
// Compares old vs new Virtual DOM (called diffing)
// Only updates the changed parts in the real DOM

// Controlled vs Uncontrolled?
// Controlled: React handles state. You can easily validate, modify, or reset the input;
// Uncontrolled: DOM handles state. The DOM controls the input value, not React. You use a ref to get the value when needed

// Lifting state up?
// Moving state to common parent component.

// Data from parent to child?
// Use props.

// Data from child to parent?
// Use callback functions passed via props.


// Context API?
// Pass global state without props drilling.



////////////////////////////////////////////////////////////////////


// ✅ Node.js & Express

// What is Node.js?
// Node.js is a JavaScript runtime that lets you run JavaScript outside the browser on your computer or server.


// Role of Express.js?
// Framework for building web apps with routing, middleware.

// Simple server in Node.js?
// const http = require('http');
// http.createServer((req, res) => {
//   res.end('Hello');
// }).listen(3000);

// Middleware in Express?
// Functions that handle requests before response is sent.

// Routes in Express?
// app.get('/path', callback)

// Handle POST data?
// Use express.urlencoded() or express.json() middleware.

// JSON requests?
// Parse using express.json() middleware.

// req.params, req.query, req.body?
// Params: Gets values from the URL path.; 
// Query: ?key=value, Gets values from the URL after the ?; 
// Body: POST data.Gets data sent in the body of a POST, PUT, or PATCH request.

// Error handling?
// Use middleware: app.use((err, req, res, next) => {})

// DB connection?
// Use mongoose for MongoDB or mysql2 for MySQL.

// CORS in Express?
// Use cors package to allow cross-origin requests.

// Project structure?
// routes/, controllers/, models/, middlewares/

// dotenv?
// Load environment variables from .env file.

// nodemon?
// Restarts server on file changes.



////////////////////////////////////////////////////////
// ✅ Databases

// MySQL:

// SQL vs MySQL?
// SQL is language; MySQL is a DBMS.

// Primary vs Foreign keys?
// Primary: unique id; Foreign: reference to another table.

// Select users age > 20?
// SELECT * FROM users WHERE age > 20;

// JOINs?
// INNER, LEFT, RIGHT, FULL.

// Normalization?
// Organize data to reduce redundancy.

// Indexes?
// Speed up search queries.

// Insert, Update, Delete?
// INSERT INTO, UPDATE, DELETE FROM

// WHERE vs HAVING?
// WHERE: row filtering; HAVING: group filtering.

// Find duplicates?
// GROUP BY, HAVING COUNT(*) > 1

// ACID?
// Atomicity, Consistency, Isolation, Durability.


/////////////////////////////////////////////////////////////


// MongoDB:

// NoSQL?
// Non-tabular, document-based DB.

// Collections & Documents?
// Tables and rows equivalent.

// Insert/Read?
// db.users.insertOne({}), db.users.find()

// Nested queries?
// db.users.find({"profile.age": 25})

// find() vs findOne()?
// All vs first match.

// Update?
// updateOne(), updateMany()

// Delete?
// deleteOne(), deleteMany()

// Aggregation?
// Data transformation pipeline.

// Relationships?
// Manual references or embedded documents.

// Connect with Node?
// Use mongoose.connect()



/////////////////////////////////////////////////////////////


// Firebase:

// What is it?
// Backend-as-a-service.

// Init Firebase?
// Use config and firebase.initializeApp()

// Firestore read/write?
// getDocs(), addDoc()

// Auth?
// createUserWithEmailAndPassword()

// Rules?
// Secure access control.

// Deploy app?
// firebase deploy

// Store images?
// Firebase Storage.

// Firestore vs Realtime DB?
// Firestore is newer, scalable.

// Security?
// Rules + Auth.

// Real-time updates?
// onSnapshot() listener.


////////////////////////////////////////////////////////////////


// ✅ Postman & API Testing

// What is Postman?
// API development & testing tool.

// Send GET?
// Set method to GET and click send.

// POST with body?
// Use Body > raw > JSON.

// Params vs Query?
// Params in URL path; Query in URL string.

// Env variables?
// {{var}} used in request and defined in environment.

// Tests?
// JS scripts to validate response.

// Auth headers?
// Add in Headers or Auth tab.

// REST API test?
// Check methods, status codes, response.

// Form-data vs JSON?
// Used for file upload vs structured data.

// Status codes?
// 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 500 Server Error


////////////////////////////////////////////////////////////////////


// ✅ Git & GitHub

// What is Git?
// Version control system.

// Git vs GitHub?
// Git is local; GitHub is cloud hosting.

// Init repo?
// git init

// Commit code?
// git add ., git commit -m "msg"

// add, commit, push?
// Staging, saving, uploading.

// Branching?
// git branch, git checkout -b

// Pull request?
// Request to merge code on GitHub.

// Merge conflicts?
// Occur when same file is edited.

// Pull vs Fetch?
// pull = fetch + merge; fetch = download only.

// Clone repo?
// git clone [url]



////////////////////////////////////////////////////////////////



// Method	Description	              Example
// concat()	Combines arrays	[1,2].concat([3,4]) → [1,2,3,4]
// slice()	Gets part of an array (no change)	arr.slice(1,3)
// splice()	Adds/removes items (changes array)	arr.splice(1, 2)
// includes()	Checks if value exists	arr.includes(2)
// indexOf()	Finds position of value	arr.indexOf(3)
// reverse()	Reverses the array	arr.reverse()
// sort()	Sorts the array	     arr.sort()
// map()	Creates new array with modified values	 arr.map(x => x * 2)
// filter()	Filters values based on a condition	     arr.filter(x => x > 2)
// reduce()	Reduces to a single value (like sum)     arr.reduce((a, b) => a + b)

// 🎯 Summary:
// Function	Adds/Removes	Where	Modifies original?
// push()	Add	           End             	✅ Yes
// pop()	Remove	       End	            ✅ Yes
// shift()	Remove	       Start        	✅ Yes
// unshift()	Add     	Start       	✅ Yes

// What is a Promise?
// A Promise is:  An object that represents a value that may not be available 
// yet, but will be resolved in the future (success or failure).


// async → Makes a function return a promise.

// await → Waits for the promise to finish before moving to the
//         next line. or Wait for the server to respond, and 
//          then save the result in response.


// What are the different data types in JavaScript?
// Primitive: string, number, boolean, null, undefined, symbol, bigint
// Non-primitive: object (includes arrays, functions)

// What is the difference between var, let, and const?
// var: function-scoped, can be redeclared and updated.
// let: block-scoped, can be updated but not redeclared.
// const: block-scoped, cannot be updated or redeclared.

// What are truthy and falsy values?
// Falsy: false, 0, '', null, undefined, NaN
// Everything else is truthy.

// What is the difference between == and ===?
// == checks value equality with type coercion.
// === checks value and type (strict equality).

// How does typeof work?
// Returns a string indicating the type of the operand, e.g., typeof 5 returns "number".

// What are template literals?
// Strings with embedded expressions using backticks (`). Example: `Hello, ${name}`

// What is hoisting?
// JavaScript moves declarations to the top of their scope before execution.

// Arrow functions vs regular functions?
// Arrow functions don't have their own this, cannot be used as constructors.


// How do you declare and call a function?

// function greet(name) {
//   return 'Hello ' + name;
// }
// greet('Sushil');

// Purpose of return?
// Exits a function and returns a value.


///////////////////////////////////////////////////////


// 🟡 Intermediate JavaScript Questions

// Variable scope?
// Determines where a variable is accessible.
// Global, Function, Block scopes.

// Function vs Block scope?
// var is function-scoped, let and const are block-scoped.

// What are closures?
// A function that remembers its outer variables even after the outer function has closed.
//A closure is a function that can access variables from outside its own scope, because it “closes over” those variables.


// Event bubbling vs delegation?
// Bubbling: Events propagate up the DOM tree.
// Delegation: Using a parent to handle events from child elements.


// Synchronous vs Asynchronous code?
// Synchronous: Executes line by line.
// Asynchronous: Executes separately, like using setTimeout or fetch.

// Callback function?
// A function passed to another function to be executed later.

// setTimeout and setInterval?
// setTimeout: Delays a function once.
// setInterval: Repeats a function at intervals.

// Spread operator (...)?
// Expands iterable objects. Example: [...arr1, ...arr2]

// Error handling?
// Use try...catch to handle runtime errors.


/////////////////////////////////////////////////////////////

// 🔹 Advanced JavaScript Questions


// Event loop?
// JavaScript engine's mechanism for handling asynchronous code.

// Higher-order functions?
// Functions that take or return other functions.

// Pure function?
// No side effects, returns the same output for same inputs.

// Memoization?
// Caching results of expensive function calls.

// Currying?
// Transforming a function with multiple arguments into a series of unary functions.

// Prototype and prototypal inheritance?
// Objects inherit from other objects using __proto__ or Object.create().

// call(), apply(), bind()?
// call: Calls a function with a given this and arguments.
// apply: Same as call but arguments are in an array.
// bind: Returns a new function with this bound.

// Garbage collection?
// Automatic memory management — removes unused objects.



///////////////////////////////////////////////////////////////



//reverse the array
function reverseArray(arr){
    let reverse = [];
    for(let i=arr.length-1; i>=0; i--){
        reverse.push(arr[i]);
    }
    return reverse;

}
console.log("the reverse num:", reverseArray([1,2,3,4,5,6]));



//min number in array 

function minNumInArray(arr){
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}
console.log("min num:", minNumInArray([2,3,4,,5,6]));


//max number in array 

function maxNumInarray(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max=arr[i];
        }
    }
    return max;
}
console.log("max num:", maxNumInarray([2,3,4,5,6,7]));



//sum of array

function sumOfArray(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log("Sum is:", sumOfArray([1,2,3,4,5]));




//remove duplicate in array

function removeDuplicate(arr){
    let seen = {};
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(!seen[arr[i]]){
            seen[arr[i]]= true;
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicate([1,2,3,4,4,5,6,6]));



//even numver array

function evenNumberInArray(arr){
    let even = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            even.push(arr[i]);
        }
    }
    return even;
}
console.log("even",evenNumberInArray([1,2,3,4,5,6,7,8,9]));
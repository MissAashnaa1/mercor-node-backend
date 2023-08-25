const quesList = [
  {
    question: "What is JavaScript?",
  },
  {
    question: "What are the data types in JavaScript?",
  },
  {
    question: "What is the purpose of 'use strict' in JavaScript?",
  },
  {
    question: "What is the DOM in the context of web development?",
  },
  {
    question: "Explain closures in JavaScript.",
  },
  {
    question: "What is the difference between 'null' and 'undefined'?",
  },
  {
    question: "How can you check the data type of a variable?",
  },
  {
    question: "Explain the concept of prototypal inheritance in JavaScript.",
  },
  {
    question: "What is an IIFE (Immediately Invoked Function Expression)?",
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
  },
  {
    question: "How does asynchronous programming work in JavaScript?",
  },
  {
    question: "What is a callback function?",
  },
  {
    question: "Explain the event bubbling and event capturing in JavaScript.",
  },
  {
    question: "What is a closure?",
  },
  {
    question: "What is a promise in JavaScript?",
  },
  {
    question: "What is the difference between 'let', 'const', and 'var'?",
  },
  {
    question: "How can you clone an object in JavaScript?",
  },
  {
    question: "What is JSON?",
  },
  {
    question:
      "What are arrow functions? How do they differ from regular functions?",
  },
  {
    question: "Explain the concept of hoisting in JavaScript.",
  },
  {
    question: "What is the difference between '==' and '==='?",
  },
  {
    question: "How can you convert a string to a number in JavaScript?",
  },
  {
    question: "What is the purpose of the 'bind' method?",
  },
  {
    question: "Explain the concept of the 'event loop' in JavaScript.",
  },
  {
    question: "What are template literals in JavaScript?",
  },
  {
    question: "What is the 'typeof' operator used for?",
  },
  {
    question: "How do you iterate over objects in JavaScript?",
  },
  {
    question: "What is the purpose of the 'map' function in JavaScript?",
  },
  {
    question: "What is a constructor function in JavaScript?",
  },
  {
    question: "Explain the same-origin policy in the context of web security.",
  },
  {
    question: "What is the 'spread operator' in JavaScript?",
  },
  {
    question: "How can you handle errors in JavaScript?",
  },
  {
    question: "What is the difference between 'call', 'apply', and 'bind'?",
  },
  {
    question: "What is the 'localStorage' and 'sessionStorage' in JavaScript?",
  },
  {
    question: "Explain the concept of a callback hell.",
  },
  {
    question: "What are ES6 modules?",
  },
  {
    question:
      "How can you add and remove classes from an HTML element using JavaScript?",
  },
  {
    question: "What is the purpose of the 'fetch' API in JavaScript?",
  },
  {
    question: "Explain the 'async/await' syntax.",
  },
  {
    question:
      "What is the difference between 'localStorage' and 'cookies' for storing data?",
  },
  {
    question: "How do you handle asynchronous code in JavaScript?",
  },
  {
    question: "What are the different types of error in JavaScript?",
  },
  {
    question: "Explain the concept of 'currying' in JavaScript.",
  },
  {
    question: "What is the purpose of the 'reduce' function?",
  },
  {
    question: "How can you make an HTTP request in JavaScript?",
  },
  {
    question: "What is a generator function?",
  },
  {
    question: "Explain the concept of the prototype chain.",
  },
  {
    question: "What is the purpose of the 'Symbol' data type?",
  },
  {
    question: "How can you prevent 'callback hell' in JavaScript?",
  },
  {
    question: "What is the 'Object.create()' method used for?",
  },
  {
    question: "How do you handle cross-browser compatibility issues?",
  },
  {
    question: "Explain the concept of 'memoization.'",
  },
  {
    question: "What is the purpose of the 'Proxy' object?",
  },
  {
    question: "What are the different types of events in JavaScript?",
  },
  {
    question: "How do you compare two objects for equality in JavaScript?",
  },
  {
    question: "Explain the concept of the 'call stack.'",
  },
  {
    question: "What is the purpose of the 'Web Workers' API?",
  },
  {
    question: "How can you make a deep copy of an object?",
  },
  {
    question: "What is the difference between 'debouncing' and 'throttling'?",
  },
  {
    question: "Explain the concept of 'event delegation.'",
  },
  {
    question: "What is the purpose of the 'WeakMap' and 'WeakSet' objects?",
  },
  {
    question: "How can you reverse a string in JavaScript?",
  },
  {
    question:
      "What is the difference between the 'prop' and 'attr' methods in jQuery?",
  },
  {
    question: "Explain the concept of the 'spread operator' in arrays.",
  },
  {
    question: "What is the purpose of the 'FormData' object in JavaScript?",
  },
  {
    question: "How can you convert a JSON string to an object?",
  },
  {
    question:
      "What is the difference between 'map' and 'forEach' array methods?",
  },
  {
    question: "Explain the concept of the 'prototype' property.",
  },
  {
    question: "What is 'hoisting' in the context of variable declarations?",
  },
  {
    question: "What is the purpose of the 'transitionend' event in CSS?",
  },
  {
    question: "How can you remove a property from an object?",
  },
  {
    question: "Explain the concept of 'debouncing' events.",
  },
  {
    question: "What is the purpose of the 'MutationObserver' object?",
  },
  {
    question: "How can you add a new element to the beginning of an array?",
  },
  {
    question:
      "What is the difference between 'var', 'let', and 'const' in terms of scope?",
  },
  {
    question:
      "Explain the concept of 'promises' and how they help with asynchronous programming.",
  },
  {
    question:
      "What is the purpose of the 'Destructuring Assignment' in JavaScript?",
  },
  {
    question: "How can you convert a NodeList to an array?",
  },
  {
    question:
      "What is the difference between 'addEventListener' and 'attachEvent'?",
  },
  {
    question:
      "Explain the concept of 'shallow copy' and 'deep copy' of objects.",
  },
  {
    question:
      "What is the purpose of the 'startsWith' and 'endsWith' string methods?",
  },
  {
    question: "How can you detect if a variable is an array?",
  },
  {
    question:
      "What is the difference between 'event.preventDefault()' and 'event.stopPropagation()'?",
  },
  {
    question: "Explain the concept of 'promisify.'",
  },
  {
    question:
      "What is the purpose of the 'querySelector' and 'querySelectorAll' methods?",
  },
  {
    question: "How can you convert a function to a string in JavaScript?",
  },
  {
    question:
      "What is the difference between 'null' and 'undefined' in JavaScript?",
  },
  {
    question:
      "Explain the concept of 'memoization' in terms of function optimization.",
  },
  {
    question: "What is the purpose of the 'Array.from()' method?",
  },
  {
    question: "How can you detect the browser's user agent using JavaScript?",
  },
  {
    question:
      "What is the difference between 'localStorage' and 'sessionStorage'?",
  },
  {
    question:
      "Explain the concept of 'caching' in the context of web development.",
  },
  {
    question: "What is the purpose of the 'bind()' method in JavaScript?",
  },
  {
    question: "How can you check if an object has a specific property?",
  },
  {
    question: "What is the difference between '==', '===', and '!='?",
  },
  {
    question: "Explain the concept of 'promise chaining.'",
  },
  {
    question: "What is the purpose of the 'innerHTML' property in JavaScript?",
  },
  {
    question: "How can you convert a number to a string in JavaScript?",
  },
  {
    question: "What is the difference between 'slice' and 'splice'?",
  },
  {
    question:
      "Explain the concept of the 'arguments' object in JavaScript functions.",
  },
];

module.exports = quesList;

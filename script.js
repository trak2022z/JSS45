"use strict";
(function() {
  window.addEventListener("load", init);

  function init() {
    
console.log(id("container").children);

console.log(id("column1").firstElementChild);
console.log(id("container").firstElementChild.firstElementChild);
console.log(id("box2").previousElementSibling);

console.log(id("box2").nextElementSibling); 
console.log(id("column2").lastElementChild);
console.log(id("box2").parentNode.parentNode); 
  
  }


  function id(id) {
  return document.getElementById(id);
}

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return document.querySelectorAll(selector);
}
  
})();




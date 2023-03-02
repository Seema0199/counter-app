const countvalue = document.getElementById('counter');

function increment(){
    // get the value from UI
let value = parseInt(countvalue.innerText);
// Update the value
value = value + 1;
// set the value onto UI
countvalue.innerHTML = value;

};


function decrement(){
    // get the value from UI
let value = parseInt(countvalue.innerText);
// Update the value
value = value - 1;
// set the value onto UI
countvalue.innerHTML = value;

};




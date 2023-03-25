// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")

let count = 0;
function increment(){
    count = count+1;
    countEl.innerText = count;
    console.log(count);
}
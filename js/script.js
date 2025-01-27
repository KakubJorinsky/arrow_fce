const add = document.querySelector(".add");
const output = document.querySelector("#output");
let i = 0;

/*
add.addEventListener("click", () => {
    output.innerHTML = Number(output.innerHTML) + 1;
});
*/

/*
add.addEventListener("click", () => {
    i++;
    output.innerHTML = i;
});
*/
addEventListener("keydown", (event) => {
    if((event.key == "a") && (event.ctrlKey)){
        output.innerHTML++;
    }
    if(event.key == "Backspace"){
        output.innerHTML--;
    }
});
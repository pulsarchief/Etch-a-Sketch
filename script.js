const cont = document.querySelector("#main_container");
const div = document.querySelector("div");
const color_select = document.querySelector("#color_select");
const rainbow_btn = document.querySelector("#rainbow");
const clear_btn = document.querySelector("#clear");

let color = color_select.value;
color_select.addEventListener("input", function () {
    color = color_select.value;
});

let num;
do {
    num = parseInt(prompt("Grid Size ( Not greater than 100 ):"));
} while (num > 100);

for (let i = 1; i <= num * num; i++) {
    let square = document.createElement("button");
    square.setAttribute("class", "grid");
    square.style.backgroundColor = "white";
    square.style.height = `${600 / num}px`;
    square.style.width = `${600 / num}px`;
    square.style.borderRadius = "0px";
    square.style.border = "0px";
    square.style.padding = "0px";
    square.addEventListener("mouseover", () => hover(square));
    cont.appendChild(square);
}


function hover(square) {
    square.style.backgroundColor = `${color}`;
}

function clear() {
    const gridElements = document.querySelectorAll(".grid");
    gridElements.forEach((node) => {
        node.style.backgroundColor = "white";
    });
}


clear_btn.addEventListener("click", clear);

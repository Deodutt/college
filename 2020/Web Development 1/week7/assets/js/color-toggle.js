let button = document.querySelector("button");
let isPurple = false;


//method 1
// button.addEventListener("click", function () {
//     if (isPurple) {
//         document.body.style.background = "white";
//         isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//         isPurple = true;
//     }
//     isPurple = !isPurple;
// });


button.addEventListener("click", function () {
    document.body.classList.toggle("purple");
});
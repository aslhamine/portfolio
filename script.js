const toggle = document.querySelector(".toggle");
const show = document.querySelector(".show");

toggle.addEventListener("click", () =>{
    show.classList.toggle("show-menu");
    setTimeout(() => {
        show.classList.remove("show-menu");
    }, 8000);
});


const btn = document.querySelector("#message-btn");
const message = document.querySelector("#message");

btn.addEventListener("click", () => {
message.classList.add("show");
setTimeout(() => {
    message.classList.remove("show");
}, 6000);
});


// const toggle = document.querySelector('.toggle');

// toggle.addEventListener('click',()=>{
//     const sharebtn = document.querySelector('.share');
//     sharebtn.classList.toggle('active');
// })
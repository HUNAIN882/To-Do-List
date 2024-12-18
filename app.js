var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none"
})

window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log("Submit form");
    })
})
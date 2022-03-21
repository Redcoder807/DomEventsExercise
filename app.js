const button1 = document.querySelector(`#one`);

button1.onclick = function(){
    alert("You clicked the first button! Congrats!");
}

const h3 = document.querySelector(`h3`);


h3.addEventListener(`mouseover`, () => {
    alert(`You hovered over the h3 element! Congrats!`)
});

// or
// h3.addEventListener(`mouseenter`, () => {
//     alert(`You hovered over the h3 element! Congrats!`)
// });

const form = document.querySelector(`form`)

form.addEventListener(`submit`, function (v){
    v.preventDefault();
    const input = form.elements.entry.value;
    alert(input);
    form.elements.entry.value = ``;

});

// Bonus
const darkMode = document.querySelector(`#dm`)

const everyElement = document.querySelectorAll(`*`);
console.dir(everyElement);
darkMode.addEventListener(`click`, () => {
    for (element of everyElement){
        element.classList.toggle(`dark-mode`);
    }
})

const times = document.querySelector(`#times`);

let num =1;
times.addEventListener(`click`, () => {
    if (num < 3){
        alert(`You clicked the last button! Congrats!`);
        num++;
    } else if (num === 3){
        alert(`OH NO! This button is NOT going to work anymore.x`)
        num++;
    }
})
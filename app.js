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

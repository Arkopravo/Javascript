// Event Propagation -> Event Propagation determines in which order the elements receive the event. There are two ways to handle this event propagation order of HTML DOM is Event Bubbling and Event Capturing.

// Event Bubbling -> down to top (default behaviour)
// foucs, blur, ...etc don't bubble


// Event Capturing/Trickling -> top to down



const div = document.querySelector(".div");
const form = document.querySelector(".form");
const button = document.querySelector(".button");


div.addEventListener("click", () => {
    alert("div clicked")
},
{
    capture: true
})

form.addEventListener("click", () => {
    alert("form clicked")
},{
    capture: true
})

button.addEventListener("click", () => {
    alert("button clicked")
},
{
    capture: true
})








const div1 = document.querySelector(".div1");
const form1 = document.querySelector(".form1");
const button1 = document.querySelector(".button1");


div1.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("div clicked")
})

form1.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("form clicked")
})

button1.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("button clicked")
})
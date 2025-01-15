// Debouncing && Throttling

// Debouncing -> Delaying the execution of a function until a certain amount of time has passed since the last time the function was called.
// Throttling -> Limiting the frequency at which a function can be executed.


const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");


let pressedCount = 0;
let triggeredCount = 0;

const startTime = new Date().getTime();

const debouncedCount = _.debounce(() => {

    const now = new Date().getTime();
    let time = now - startTime;
    console.log(time);

    count.innerHTML = ++triggeredCount;
}, 800);
 
btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debouncedCount();
});



















const btn1 = document.querySelector(".increment_btn1");
const btnPress1 = document.querySelector(".increment_pressed1");
const count1 = document.querySelector(".increment_count1");


let pressedCount1 = 0;
let triggeredCount1 = 0;

const startTime1 = new Date().getTime();

const throttledCount1 = _.throttle(() => {

    const now1 = new Date().getTime();
    let time1 = now1 - startTime1;
    console.log(time1);

    count1.innerHTML = ++triggeredCount1;
}, 800);
 
btn1.addEventListener("click", () => {
    btnPress1.innerHTML = ++pressedCount1;
    throttledCount1();
});






// Debounce polyfill implementation
const debounce = (cb, d) => {
    let timer;

    return function (...args) {

        if(timer) clearTimeout(timer);

        timer = setTimeout(() => {
            cb(...args)
        }, d)
    } 
}




// Throttle polyfill implementation
const throttle = (cb, d) => {
    let last = 0;;

    return (...args) => {

        let now = new Date().getTime();

        if(now - last < d) return;
        last = now;
        return cb(...args);
    } 
}
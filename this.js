// "use strict";

function f(){
    console.dir(this)
    // console.log(arguments)
}

// console.dir(f);

// const obj = {
//     callback: f
// }

// obj.callback;


// document.addEventListener('click', f)

// document.addEventListener('click', () => f())

// new f();

// function f(){
//     //this = {}
//     console.dir(this)
//     //return this
// }


// const objThis = {
//    name: "Привязываемый объект"
// }

// const fbind = f.bind(objThis);
// fbind(1,2,3);

// f.call(objThis, 1, 2, 3);

// f.apply(objThis, [1,2,3]);
function a() {
    console.log('A!');
    return function () {
        console.log('B!');
    };
 }
console.log(typeof a()); 
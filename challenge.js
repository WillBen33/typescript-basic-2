function hello(fn, ln) {
    if (fn != undefined && ln != undefined) {
        return "Hello " + fn + " " + ln;
    }
    return "Hello " + fn;
}
function concat(a, b) {
    return a + b;
}
var bob = { firstName: "bob", lastName: "marley" };
console.log(hello(bob.firstName));
console.log(hello(bob.firstName, bob.lastName));
var wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);

interface User {
    firstName?: string;
    lastName?: string;
}

function hello(fn?: string, ln?: string){
    if(fn != undefined && ln != undefined){
        return "Hello " + fn + " " + ln;
    }
    return "Hello " + fn;
}

function concat(a:string, b:string) {
    return a + b;
}

let bob:User = {firstName: "bob", lastName: "marley"};
console.log(hello(bob.firstName));
console.log(hello(bob.firstName, bob.lastName));

const wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);

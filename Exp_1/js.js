console.log("Hello World");
let a = 19;
console.log(typeof a);
console.log('2' > 1);
console.log(1===1);
console.log('2'===1)
let b=20;
if(a>b){
    console.log("yes");
}
else{
    console.log("no");
}
console.log(a>18 ? 'Yes' : 'No')

let age=('enter your age',19);
let message=(age<18)?'Minor':
        (age>18)?'Adult':
        (age>40)?'Middle Aged':
        (age>60)?'Senior citizen':
        'invalid age';
console.log(message);

var c=10;
while(c>0){
    console.log(c);
    c=c-1
}
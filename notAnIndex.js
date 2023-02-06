function greetMe(stringa){
    alert('hello '+stringa);
}
function constants(){
    const pi=3.14;
    //defined constants in a function work only in the function's scope
    alert(pi+'inside function');
    //constants cannot be redeclared but the constants properties can be changed
    //constants cannot have the same name as a var
}
//constants();
//alert(pi);
const MY_OBJECT = { key: "value" };
var g= MY_OBJECT.key;
MY_OBJECT.key = "otherValue";
g=g +MY_OBJECT.key;
alert(g);




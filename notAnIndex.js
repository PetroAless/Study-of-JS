function greetMe(stringa){
    alert('hello '+stringa);
}
function constants(){
    const pi=3.14;
    
    alert(pi+'inside function');
    const MY_OBJECT = { key: "value" };//ex 1
    var g = MY_OBJECT.key;
    MY_OBJECT.key = "otherValue";
    g = g + MY_OBJECT.key;
    alert(g);
    //ex 2
    //ex 3
}
//greetMe("world");
//constants();//alert(pi);
//additions with a number and a string always create a new string
//eg: "the answer is" + 32 = "the answer is 32"
//but with all other operators the result is a number





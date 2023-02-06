function greetMe(stringa){
    alert('hello '+stringa);
}
function constants(){
    const pi=3.14;
    
    alert(pi+'inside function');
    const MY_OBJECT = { key: "value" };//Constants ex 1
    var g = MY_OBJECT.key;
    MY_OBJECT.key = "otherValue";
    g = g + MY_OBJECT.key;
    alert(g);
    //Constants ex 2
    //Constants ex 3
}
function toString(numero,base){
    alert(parseInt(numero,base));
    //toString ex 1
}
//greetMe("world");
//constants();//alert(pi);
/*toString("100",2);
toString("100",10);
toString("10",16);*/






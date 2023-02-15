function greetMe(stringa){
    console.log('hello '+stringa);
}
function constants(){
    const pi=3.14;
    
    console.log(pi+'inside function');
    const MY_OBJECT = { key: "value" };//Constants ex 1.1
    var g = MY_OBJECT.key;
    MY_OBJECT.key = "otherValue";
    g = g + MY_OBJECT.key;
    console.log(g);
    //Constants ex 1.2
    //Constants ex 1.3
}
function toString(numero,base){
    console.log(parseInt(numero,base));
    //toString ex 3.1
}
function literals(){
    const myLiteralArray=[
        "first_Property",
        "second_Property",
        ,           //ex of TRAILING COMMAS 0.1
        "third_Property",
    ];
    console.log(myLiteralArray[3]);
}
function controlFlowErrorHandling(){
    try {
        valore1="";
        if(valore1){
            console.log("true");
        }else{
            console.log("false");
            throw new Error('Cannot handle this value');
        }
        console.log(valore1);
    } catch (error) { //5.1 esempio di catch
        console.error(error);
        console.error("Utilizzare un altro valore");
    }
}

//greetMe("world");
//constants();//console.log(pi);
/*toString("100",2);
toString("100",10);
toString("10",16);*/
//literals();
//controlFlowErrorHandling();



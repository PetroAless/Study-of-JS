"use strinct";
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

//ex of function expression  7.2

const square = function(x){
    return x*x;
};

function cube(a,b){
    return a(b)*b;
}

//esempio di funzione definita in base ad una condizione
//ex 7.3
if(Math.pi===0){
    myFunc1 = function(myObject){
        myObject.a="valore1";
    };
}else{
    myFunc1 = function(myObject){
        myObject.a="valore2!";
    };
}



//greetMe("world");
//constants();//console.log(pi);
/*toString("100",2);
toString("100",10);
toString("10",16);*/
//literals();
//controlFlowErrorHandling();


//console.log(cube(square,4));

/*
CVVVVVVVVVVVVVVV
    
*/ 


var intervalID;
var speed=20;
var x1=(speed*Math.random())+speed;
var y1=(speed*Math.random())+speed;
function start(){
    const cuboOut = document.getElementById("x1");
    const cuboIn = document.getElementById("x2");

    var x=0;
    var y=0;

    if(cuboIn.style.left)
        x = parseFloat(cuboIn.style.left);
    if(cuboIn.style.top)
        y = parseFloat(cuboIn.style.top);

    intervalID = setInterval(() => {
        if(parseFloat(cuboIn.style.left)>cuboOut.offsetWidth-cuboIn.offsetWidth)
            x1=-(speed*Math.random())-speed;
        if(parseFloat(cuboIn.style.left)<1)
            x1=(speed*Math.random())+speed;
        if(parseFloat(cuboIn.style.top)>cuboOut.offsetHeight-cuboIn.offsetHeight)
            y1=-(speed*Math.random())-speed;
        if(parseFloat(cuboIn.style.top)<1)
            y1=(speed*Math.random())+speed;
        x+=x1;
        y+=y1;
        cuboIn.style.left=x+"px";
        cuboIn.style.top=y+"px";
        console.log("x:"+x);
        console.log("y:"+y);
    }, 10);
}
function stop(){
    clearInterval(intervalID);
}

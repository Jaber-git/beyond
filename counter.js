
//we can move onclick event on this main js instead on DOM
//document.addEventListener("DomContentLoaded", function(){ // fot loading whole page
 //   document.querySelector("button").onclick=count;

//})
//or
let counter=0;
document.addEventListener("DomContentLoaded", function() { 
    document.querySelector("button").onclick=function(){
                    counter++;
                    document.querySelector("#counter").innerHTML=counter; //current value of counter=0 and it incrementing


    };
       })//it take some element and wait something to happen




//or  it is simple
//function count() {
//counter++;
//document.querySelector("#counter").innerHTML=counter; //current value of counter=0 and it incrementing

//}
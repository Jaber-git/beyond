/***
 * demonstration 1
 * alert("Hello,world!");
 */

/***
 * demonstration 1
 * console.log("Hello ,world");
 */

/**
 * demonstration 3
 *function sum(x,y){
    *  return x+y; 
    *   }
    *
    *
    *console.log(sum(10,10)); 
 * 
 * 
 * 
 * 
 */
/** 
 * demo 3,4,5
 * let tasks=[]; //bunch of info togather
 * let taskInput=prompt('Enter task');
 * 
 *console.log('taskInput');
 
 *tasks.push(taskInput);
 * 
**/

/***
 * 
 * to do list
 * cosole version
 */

let tasks=[]; //bunch of info togather
let taskIput='';

do{
taskInput=prompt('Enter task');

   if(taskInput!=='quit'){
   tasks.push(taskInput);
   }
}
while(taskInput!=='quit');

tasks.forEach(function(e){

console.log(e);

});

console.log(tasks);
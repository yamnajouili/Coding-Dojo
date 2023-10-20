//Step 1: 
// because there are repetitions of steps 
// the starting of the loop is 0 
//the loop stops at 6
//the loop needs knows to stope a condition
//for each iteration increments tow steps
// we need a variable i 

for(var i=0;i<7;i++){
    if(i%2==0 && i!==0 && i!==6){
        console.log("piece of candy");
    }
    if(i==6){
        console.log("stop giving candy ");
    }
}


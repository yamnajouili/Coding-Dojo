// #1 Write a for loop that will traverse through an array of numbers, and print each number.
 var arr1 = [8, 6, 7, 5, 3, 0, 9];
 for(var i=0;i<arr1.length;i++){

    console.log(arr1[i]);
}

//#2  print sum of the numbers and idex of the array
 var arr2 = [4, 7, 13, 13, 19, 37, -2];
 var sum=0
 for(var i=0;i<arr2.length;i++)
     { 
sum=sum+arr2[i];
 console.log(sum);
 console.log(i);

    }
    // #3 print the numbers of array greater than 5

    var arr3 = [6, 2, 12, 14, -24, 5, 0];
    for(var i=0;i<arr3.length;i++){
        if (arr3[i]>5){
        console.log(arr3[i]);}
    }
    
    //* ninja* print numbers 
    var arr3 = [6, 2, 12, 14, -24, 5, 0];
    for(var i=0;i<arr3.length;i++){
        if (arr3[i]<5){
            arr3[i]= "No dice." ;
            }
        else {
            console.log(arr3[i]);}
             ;
        
    }
    

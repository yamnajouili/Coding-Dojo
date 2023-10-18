var count = 0;
for (var i = 1996; i < 2024; i++) {
    if (i == 2023) {
        console.log("HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈");
    }else{
        if (count==10) {
            console.log("happy decade of JS!");
            count=0;
        } else {
            console.log(i+" JS is awesome!");
        }
        
        count = count + 1;

  }
  
}

 function Hello (n){
    n = n + "";
    return n.split("").reverse().join("");
 }
 console.log(Hello(32243));

 function CARLIST (){
    let num = parseInt("ENTER THE NUMBER 1");
    let num1 = parseInt("ENTER THE NUMBER 2");
    console.log(num,num1);
 }
 Hello();
 function CAR(){
    let userInput= prompt("ENTER THE CAR NAME");
    const CARLIST1 = [
        "MERCEDES",
            "BMW",
            "LAMBORGHINI",
             "FORD",
             "FORTUNER",
             "LAND CRUSIER",
             "VIGO",
             "ELANTRA",
             "SONETA",
             "BUGATTI",
             "CARNIVAL"
      ];
      console.log(CARLIST1);
    // if (userInput == CARLIST1) {
    //     console.log("THIS CAR IS PRESENT IN YOUR ARRAY");
    // }  

    // else{console.log("THIS CAR IS NOT PRESENT IN YOUR ARRAY");}
    if(CARLIST1.indexOf(userInput)>=0) {console.log("this car is available");}
    else{
        console.log("THIS CAR IS NOT AVAILABLE");
    }
 CARLIST1[11]= "MEHRAN";
  console.log(CARLIST1);
      }
 CAR();
  
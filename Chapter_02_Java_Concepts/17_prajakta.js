let a = 10;
console.log(a)
if(true)
    {

    console.log(a); //Global Variable
    let a = 20;
    // console.log(a); //Local Variable , TDZ

   }
document.addEventListener("DOMContentLoaded", function(){

  // var change1 = 10;
  // var change2 = 20;


function addSomething(a,b,c){
    var change3 = (a + b);
    if(change3 >=100){
      console.log("Jest kurwa większy od 100");
    } else if (change3 <100 && change3 >=50){
      console.log("a teraz jest mniejsze od 100 ale większe od 50");
    } else if (change3 <50 && change3>=20) {
      console.log("a teraz jest mniejsze od 50 ale większe od 20");
    } else {
      console.log("Jestem mniejszy od 20");
    }
    // console.log(change3);
}

addSomething(80,0);
// console.log(addSomething);



})


// $(() => {
//
//
//
// });

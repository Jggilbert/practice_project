// var button = document.getElementById("toggle").innerHTML;
// var myDIV = document.getElementById("myDiv").innerHTML;
// var boolean = false;
 
//  function toggleFunction() {
//    if (boolean) {
//      myDIV.setAttribute("class", "hide")
//      boolean = false;
//    }
//    else {
//      myDIV.setAttribute("class", "show")
//      boolean = true;
//    }
//  }

//  button.addEventListener("click", toggleFunction, true);

// $( "button" ).click(function() {
//     $( "Mydiv" ).toggle( "fast" );
//   });


$(document).ready(function(){
  $( "button" ).click(function(){
    $( "p" ).toggle( "fast");
  });
});
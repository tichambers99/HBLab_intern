// function myFunction() {
//     var arrayOfElements=document.getElementsByClassName('weekends');
//     var lengthOfArray=arrayOfElements.length;

//     for (var i=0; i<lengthOfArray;i++){
//         if (arrayOfElements[i].style.display === "none") {
//             arrayOfElements[i].style.display = "table-cell";
//           } else {
//             arrayOfElements[i].style.display = "none";
//           }
//     }
// }

function myFunction() {
  var arrayOfElements=document.getElementsByClassName('weekends');
  var lengthOfArray=arrayOfElements.length;

  for (var i=0; i<lengthOfArray;i++){
    arrayOfElements[i].classList.toggle('visiableweekends')
  }
}
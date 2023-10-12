
// let res = document.forms['myForm'];
// console.log(res[0].value);
// console.log(res[1].value);
// console.log(res[2].value);
// console.log(res[3].value);
// console.log(res[4].value);




var myForm = document.getElementById("myForm");

for (var i = 0; i < myForm.elements.length; i++) {
console.log(myForm.elements[i].value);
}

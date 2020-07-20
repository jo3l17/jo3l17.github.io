const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const select = document.getElementById('type');
// const product = urlParams.get('product')
// console.log(product);
// console.log(urlParams.has('rentalType'));
const paramNeeded = 'rentalType'
if(urlParams.has(paramNeeded)){
    select.value = urlParams.get(paramNeeded)
}
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("date").setAttribute("min", today);
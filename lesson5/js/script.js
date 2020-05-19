var today = new Date()
var days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
var date = `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`
document.getElementById('date').innerHTML = date
const hambutton = document.getElementById('menu_button');
const mainnav = document.getElementById('main_nav');
const forecastDays = document.getElementById("forecastDays");
const message = document.getElementById("message");
var forecastArrayDays=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
forecastDays.innerHTML=''

hambutton.addEventListener('click', () => {
    if(mainnav.classList.value=='navLinks'){
        hambutton.innerHTML="&#x2715"
    }else{
        hambutton.innerHTML="&#9776; Menu"
    }
    mainnav.classList.toggle('opened');
    
}, false);
var counter = today.getDay()
for (let i = 0; i < 5; i++) {
    var cell = document.createElement('td')
    cell.innerHTML=forecastArrayDays[counter]
    if(counter==6){
        counter=0
    }else{
        counter++
    }
    forecastDays.appendChild(cell)
}
if(counter==5){
    message.style.display='block'
}else[
    message.style.display='none'
]
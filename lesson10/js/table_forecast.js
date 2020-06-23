var day = new Date()
var forecastArrayDays=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const forecastDays = document.getElementById("forecastDays");
const message = document.getElementById("message");
forecastDays.innerHTML=''
var counter = day.getDay()+1
for (let i = 0; i < 5; i++) {
    var cell = document.createElement('th')
    cell.innerHTML=forecastArrayDays[counter]
    if(counter==6){
        counter=0
    }else{
        counter++
    }
    forecastDays.appendChild(cell)
}
if(day.getDay()==5){
    message.style.display='block'
}else[
    message.style.display='none'
]
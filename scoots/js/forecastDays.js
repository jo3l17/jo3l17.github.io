var day = new Date()
var forecastArrayDays=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const forecastDays = document.getElementById("forecastDays");
forecastDays.innerHTML=''
var counter = day.getDay()+1
if(counter == 7){
    counter = 0
}
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
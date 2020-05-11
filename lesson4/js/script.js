var today = new Date()
var days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
var date = `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`
document.getElementById('date').innerHTML = date

const hambutton = document.getElementById('menu_button');
const mainnav = document.getElementById('main_nav')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('opened')}, false);
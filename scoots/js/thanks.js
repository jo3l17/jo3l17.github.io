const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const Name = document.getElementById('Name');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const HomeStateCountry = document.getElementById('HomeStateCountry');
const date = document.getElementById('date');
const period = document.getElementById('period');
const rentalType = document.getElementById('rentalType');
fullName.textContent = urlParams.get('name');
Name.textContent = urlParams.get('name');
email.textContent = urlParams.get('email');
phone.textContent = urlParams.get('phone');
HomeStateCountry.textContent = urlParams.get('HomeStateCountry');
date.textContent = urlParams.get('date');
period.textContent = urlParams.get('period');
rentalType.textContent = urlParams.get('rentalType');

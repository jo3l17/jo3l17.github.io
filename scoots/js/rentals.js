urlRequest = "data/rentals.json";
const rentals = document.getElementById('rentals');
fetch(urlRequest).then(res=>res.json())
.then(response=>{
    response.rentals.forEach(element => {
        const divContainer = document.getElementById(element.type.replace(/\s+/g, '_').replace(/-/g, '_').toLowerCase())
        const h2 = document.createElement('h2');
        h2.classList.add('rental_header');
        h2.textContent=element.type;
        divContainer.append(h2);
        element.content.forEach(element1 =>{
            const id = element1.rentalType.replace(/\s+/g, '_').replace(/-/g, '_').toLowerCase()
            const div = document.createElement('div');
            const source = document.createElement('source');
            const picture = document.createElement('picture');
            const div1 = document.createElement('div');
            const div2 = document.createElement('div');
            const img = document.createElement('img');
            const h3 = document.createElement('h3');
            const h4 = document.createElement('h4');
            const span = document.createElement('span');
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');
            const tr1 = document.createElement('tr');
            const tr2 = document.createElement('tr');
            const trmid = document.createElement('tr');
            const halfDay = document.createElement('td');
            const fullDay = document.createElement('td');
            const halfDay1 = document.createElement('td');
            const fullDay1 = document.createElement('td');
            const th1 = document.createElement('th');
            const th2 = document.createElement('th');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const hr = document.createElement('hr');
            const a = document.createElement('a');
            halfDay.textContent = "Half Day";
            fullDay.textContent = "Full Day";
            halfDay1.textContent = halfDay.textContent;
            fullDay1.textContent = fullDay.textContent;
            trmid.append(halfDay,fullDay,halfDay1,fullDay1);
            a.textContent = "Rent Now"
            h4.textContent = 'Table Price';
            th1.textContent = 'Reservation';
            th2.textContent = "Walk-In";
            td1.textContent = '$'+element1.reservation.fullDay;
            td2.textContent = '$'+element1.reservation.halfDay;
            td3.textContent = '$'+element1.walkIn.fullDay;
            td4.textContent = '$'+element1.walkIn.halfDay;
            tr1.append(th1,th2);
            tr2.append(td1,td2,td3,td4);
            thead.append(tr1);
            tbody.append(trmid,tr2);
            table.append(thead,tbody);
            img.classList.add('rental_img');
            table.classList.add('table_price');
            div.classList.add('rental_container');
            h3.classList.add('rental_header');
            a.classList.add('btn','btn_primary')
            a.setAttribute('href','reservations.html?rentalType='+id);
            th1.setAttribute('colspan',2);
            th2.setAttribute('colspan',2);
            img.setAttribute('src','images/rentals/'+element1.img+'_large.jpg');
            img.setAttribute('alt',element1.rentalType);
            source.setAttribute('media','(max-width: 32.5em)');
            source.setAttribute('srcset','images/rentals/'+element1.img+'_medium.jpg');
            h3.textContent=element1.rentalType;
            span.textContent = 'Max Persons: '+ element1.maxPersons;
            picture.append(source,img);
            div1.append(picture);
            div2.append(span,h4,table,a)
            div.append(div1,div2);
            divContainer.append(h3,div,hr);
        });
        rentals.append(divContainer);
    });
})
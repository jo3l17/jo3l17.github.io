const urlRequest = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(urlRequest).then(res => res.json()).then((objJson => {
    const towns = objJson['towns'];
    const filteredTowns = towns.filter((town)=>{
        if(town.name=="Fish Haven"||town.name=="Preston"||town.name=="Soda Springs"){
            return town
        }
      });
    for (let i = 0; i < filteredTowns.length; i++) {
        const element = filteredTowns[i];
        console.log(element)
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let description = document.createElement('span');
        let annualRain = document.createElement('p');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let image = document.createElement('img');
        let div = document.createElement('div');
        h2.textContent = element.name
        year.textContent = 'Year founded: ' + element.yearFounded;
        population.textContent = 'Population: ' + element.currentPopulation;
        annualRain.textContent = 'Annual Rain Fall: ' + element.averageRainfall;
        description.textContent = element.motto;
        image.setAttribute('src', 'images/' + element.photo);
        image.setAttribute('alt', element.name);
        div.append(h2, description, year, population, annualRain, )
        card.append(div,image);
        document.querySelector('div.cards').appendChild(card);
    }
})
);
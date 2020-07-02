const urlRequest = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(urlRequest).then(res => res.json()).then((objJson => {
    const towns = objJson['towns'];
    const filteredTowns = towns.filter((town) => {
        if (town.name == "Preston" || town.name == "Fish Haven" || town.name == "Soda Springs") {
            return town
        }
    });
    filteredTowns.sort((a,b) => (a.currentPopulation > b.currentPopulation) ? 1 : ((b.currentPopulation > a.currentPopulation) ? -1 : 0)); 
    filteredTowns.reverse();
    for (let i = 0; i < filteredTowns.length; i++) {
        const element = filteredTowns[i];
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
        image.setAttribute('src', 'images/300x400.png');
        image.setAttribute('data-src', 'images/' + element.photo);
        image.setAttribute('alt', element.name);
        div.append(h2, description, year, population, annualRain,)
        card.append(div, image);
        document.querySelector('div.cards').appendChild(card);
    }
    // lazyload for this images
    const images = document.querySelectorAll(".cards img[data-src]");

    const loadImages = (image) => {
        image.setAttribute("src", image.getAttribute("data-src"));
        image.onload = () => { image.removeAttribute("data-src") };
    }

    const imgOptions = {
        threshold: 0,
        rootMargin: "0px 0px 100px 0px"
    };
    if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries, imgObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImages(entry.target);
                    imgObserver.unobserve(entry.target);
                }
            })
        }, imgOptions);
        images.forEach((img) => {
            imgObserver.observe(img)
        })
    } else {
        images.forEach(image => {
            loadImages(image)
            // imgObserver.observe(image);
        });
    }

})
);
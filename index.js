const cards = [
    {image: "/images/icon-sedans.svg", color:"hsl(31, 77%, 52%)", title: "sedan", desc:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."},
    {image: "/images/icon-suvs.svg", color:"hsl(184, 100%, 22%)", title: "suvs", desc:"  Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."},
    {image: "/images/icon-luxury.svg", color:"hsl(179, 100%, 13%)", title: "luxury", desc:"  Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."},
];

const container = document.querySelector(".card-container");

function showCards() {
    return (
        cards.forEach(card => {
            const article = document.createElement("article");
            article.className = "card";
            article.style.backgroundColor = card.color
            article.innerHTML = `
                <div class="card__image">
                    <img src=${card.image} alt=${card.title}/>
                </div>
                <h3 class="card__title">${card.title.toUpperCase()} </h3>
                <p class="card__desc">${card.desc}</p>
                <div>
                    <a class="more-button" href="#">Learn More</a>
                </div>
            `;
            container.appendChild(article)
        })
    )
}

showCards();
const cards = {
  recommended: [
    {
      title: "HTML full course - Build a Website Tutorial",
      img: "https://picsum.photos/200/300",
      duration: "4h 16 m",
      level: "Beginner",
      stars: 3,
      totalVotes: 1600,
      price: "$550",
      author: "Miston Wilson",
    },
    {
      title: "A complete beginner's guide to JavaScript",
      img: "https://picsum.photos/200/300",
      duration: "3h 16 m",
      level: "Advance",
      stars: 4,
      totalVotes: 7500,
      price: "$550",
      author: "Miston Wilson",
    },
    {
      title: "How to create a complete site in React",
      img: "https://picsum.photos/200/300",
      duration: "3h 16 m",
      level: "Advance",
      stars: 4,
      totalVotes: 7500,
      price: "$550",
      author: "Miston Wilson",
    },
    {
      title: "How to create a complete site in React",
      img: "https://picsum.photos/200/300",
      duration: "3h 16 m",
      level: "Advance",
      stars: 4,
      totalVotes: 7500,
      price: "$550",
      author: "Miston Wilson",
    },
  ],
  mostPopular: [
    {
      title: "HTML full course - Build a Website Tutorial",
      img: "https://picsum.photos/200/300",
      duration: "4h 16 m",
      level: "Beginner",
      stars: 3,
      totalVotes: 1600,
      price: "$550",
      author: "Miston Wilson",
    },
    {
      title: "A complete beginner's guide to JavaScript",
      img: "https://picsum.photos/200/300",
      duration: "3h 16 m",
      level: "Advance",
      stars: 4,
      totalVotes: 7500,
      price: "$550",
      author: "Miston Wilson",
    },
  ],
};

/*const cardsContainer = document.querySelector("#cardsContainer");
console.log(cardsContainer);

const createCard = (cardData) => {
  const cardWrapper = document.createElement("div");
  cardWrapper.setAttribute("class", "col-12 col-md-4 col-lg-3");

  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "card gap-2");

  const cardImg = document.createElement("img");
  cardImg.setAttribute("class", "card-img-top w-100 object-fit-cover h-25");
  cardImg.setAttribute("src", cardData.img);
  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  const cardTitle = document.createElement("h3");
  cardTitle.textContent = cardData.title;
  cardTitle.setAttribute("class", "card-title");
  
  const cardPrice = document.createElement("span");
  cardPrice.textContent = cardData.price;
  
  const cardAuthor = document.createElement("h5");
  cardAuthor.textContent = cardData.author;
  cardBody.append(cardTitle, cardPrice, cardAuthor);
  createDurationAndLevel(cardData.duration, cardData.level, cardBody, cardPrice);
  cardContainer.append(cardImg, cardBody);
  cardWrapper.appendChild(cardContainer);
  cardsContainer.appendChild(cardWrapper);
};

const createDurationAndLevel = (duration, level, cardDivToAppend, elementBefore) => {
  const container = document.createElement("div");
  container.setAttribute("class", "d-flex align-items-center gap-3");
  const durationDiv = document.createElement("div");
  const levelDiv = document.createElement("div");
  durationDiv.setAttribute("class", "d-flex align-items-center gap-1");
  levelDiv.setAttribute("class", "d-flex align-items-center gap-1");
  const durationIcon = document.createElement("ion-icon");
  durationIcon.setAttribute("name", "time-outline");
  const durationSpan = document.createElement("span");
  durationSpan.textContent = duration;
  const levelIcon = document.createElement("ion-icon");
  levelIcon.setAttribute("name", "stats-chart-outline");
  const levelSpan = document.createElement("span");
  levelSpan.textContent = level;
  durationDiv.append(durationIcon, durationSpan);
  levelDiv.append(levelIcon, levelSpan);
  container.append(durationDiv, levelDiv);
  cardDivToAppend.insertBefore(container, elementBefore);
};

cards.recommended.forEach(card =>{
    createCard(card);

})*/  

/*const contenterCard = document.getElementById("contentercard");


 const popolaCard = (cardData, containerToAppend) =>{
  const boxCards = document.createElement("div");
  boxCards.setAttribute("class","col-6 col-lg-3 col-md-4 ");
  const cardBox = document.createElement("div");
  cardBox.setAttribute("class","card");
  const imgCard = document.createElement("img");
  imgCard.setAttribute("class", "card-img-top");
  imgCard.setAttribute("src",cardData.img);
  const cardBody = document.createElement("div")
  cardBody.setAttribute("class","card-body");
  const cardTitle = document.createElement("h3");
  cardTitle.innerText = cardData.title
  cardTitle.setAttribute("class","card-title");
  const cardPrice = document.createElement("span");
   cardPrice.innerText= cardData.price;
   const autore = document.createElement("h5");
   autore.innerText = cardData.author;
   cardBody.append(cardTitle, cardPrice, autore);
   createDurationLevel(cardData.duration, cardData.level, cardBody, cardPrice);
   cardBox.append(imgCard, cardBody);

  boxCards.appendChild(cardBox);
  containerToAppend.appendChild(boxCards)
}*/


const cardsContainer = document.getElementById("cardsContainer");

const createCard = (cardData, containerToAppend) => {
  const cardWrapper = document.createElement("div");
  cardWrapper.setAttribute("class", "col-6 col-md-4 col-lg-3");
  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "card gap-2");
  const cardImg = document.createElement("img");
  cardImg.setAttribute("class", "card-img-top w-100 object-fit-cover h-15");
  cardImg.setAttribute("src", cardData.img);
  
  const cardBody = document.createElement("div")
  cardBody.setAttribute("class", "card-body")
  const cardTitle = document.createElement("h3")
  cardTitle.innerText = cardData.title;
  cardTitle.setAttribute("class", "card-title");
  const cardPrice = document.createElement("span");
  cardPrice.innerText = cardData.price;
  const cardAuthor = document.createElement("h5");
  cardAuthor.innerText = cardData.author;
  cardBody.append(cardTitle, cardPrice, cardAuthor);
  createDurationLevel(cardData.duration, cardData.level, cardBody, cardPrice);
  cardContainer.append(cardImg, cardBody);
  cardWrapper.appendChild(cardContainer);
  containerToAppend.appendChild(cardWrapper);



}
  const createDurationLevel = (duration, level, cardDivToAppend, elementBefore) => {
    const container = document.createElement("div");
    container.setAttribute("class", "d-flex align-items-center gap-3");
    const divDuration = document.createElement("div");
    divDuration.setAttribute("class", "d-flex align-items-center gap-1");
    const divLevel = document.createElement("div");
    divLevel.setAttribute("class", "d-flex align-items-center gap-1");
    const durationIcon = document.createElement("ion-icon");
    durationIcon.setAttribute("name", "time-outline");
    const durationSpan = document.createElement("span");
    durationSpan.textContent = duration;
    const levelIcon = document.createElement("ion-icon");
    levelIcon.setAttribute("name", "stats-chart-outline");
    const levelSpan = document.createElement("span");
    levelSpan.innerText = level;
    divDuration.append(durationIcon, durationSpan);
    divLevel.append(levelIcon, levelSpan);
    container.append(divDuration, divLevel);
    cardDivToAppend.insertBefore(container, elementBefore)
  };
    
cards.recommended.forEach(card => {
  createCard(card, cardsContainer)
})
     
const cardsContainer2 = document.getElementById("cardsContainer2");

cards.recommended.forEach(card => {
  createCard(card, cardsContainer2)
})












const cardsContainer3 = document.getElementById("cardsContainer3");

cards.recommended.forEach(card =>{
  createCard(card, cardsContainer3)
})
      
  

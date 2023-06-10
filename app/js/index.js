/* import { menuClick } from "./module/menu.js";
menuClick(); */

const cardsPortfolio = [];
function creatPortfolio() {
    const cardImg=[];
    const cardName = [`Landing vr.1`,`Landing vr.2`,`Landing vr.3`,`Portfolio 1`,`Portfolio 1`,`Portfolio 1`,
    `Portfolio 1`,`Single Project`, `About Company`, `About TEam`, `Single Team Member`, `FAQ PAge`,
    `Contact Us`, `Blog 1`,`Blog 2`,`Blog 3`,`Blog Categories`, `Single Blog`, `Pricing`, `Style guide`, `Licenses` ];
    let weyCard = `./image/card/IMAGE (0).png`;
    let IndexChar;
    for (let index = 0; index < weyCard.length; index++) {
        let char = weyCard[index]
        if (char == `0`) {
            IndexChar = index;
        };
    };

    for (let index = 0; index < 21; index++) {
        cardImg[index] = weyCard.slice(0,IndexChar)+index +weyCard.slice(IndexChar+1);
    }
    for (let index = 0; index < cardName.length; index++) {
        cardsPortfolio.push({
            img: cardImg[index],
            name: cardName[index],
        });
        
    };
};
creatPortfolio();
console.log(cardsPortfolio);
const parentDiv = document.querySelector(`.main__cards`);

const writeCard = (cardsPortfolio , parentDiv) => {
    parentDiv.innerHTML = cardsPortfolio.map (({img, name}) =>
        `
        <div class="card">
        <div class="card__img">
            <img src="${img}" alt="">
        </div>
        <div class="card__item">
            <p>${name}</p>
        </div>
    
    </div>
     `
    ).join(``);

};
writeCard(cardsPortfolio, parentDiv);
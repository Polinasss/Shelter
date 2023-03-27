import imgPath from '@assets/donation-dog';
import imgCard from '@assets/credit-card';

class InAddition {
    constructor() {
        return this.init();
    }

    init() {
        return this.render();
    }

    render() {
        const inAddition = document.createElement('div'); //создали общий див секции
        inAddition.classList.add('inAddition');

        const holder = document.createElement('div'); //создали контейнер
        holder.classList.add('container');

        const infoBlockInAddition = document.createElement('div'); //блок с информацией
        infoBlockInAddition.classList.add('infoBlockInAddition');

        const infoBlockDogIMG = document.createElement('div'); //картинка
        infoBlockDogIMG.classList.add('infoBlockInAddition__img');
        const img = document.createElement('img');
        img.alt = 'donation-dog';
        img.src = imgPath;
        infoBlockDogIMG.appendChild(img);

        const infoBlockText = document.createElement('div'); //текст
        infoBlockText.classList.add('infoBlockInAddition__text');
        const h2 = document.createElement('h2');
        h2.innerHTML = "You can also make a donation";
        const p1 = document.createElement('p');
        p1.innerHTML = "Name of the bank / Type of bank account";
        const creditCard = document.createElement('div');
        creditCard.classList.add('creditCard');
        const cardImg = document.createElement('img');
        cardImg.alt = 'credit-card';
        cardImg.src = imgCard;
        const cardNumber = document.createElement('p');
        cardNumber.innerHTML = '8380 2880 8028 8791 7435'
        const p2 = document.createElement('p');
        p2.innerHTML = "Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.";
        
        creditCard.appendChild(cardImg);
        creditCard.appendChild(cardNumber);
        infoBlockText.appendChild(h2);
        infoBlockText.appendChild(p1);
        infoBlockText.appendChild(creditCard);
        infoBlockText.appendChild(p2);
        infoBlockInAddition.appendChild(infoBlockDogIMG);
        infoBlockInAddition.appendChild(infoBlockText);
        holder.appendChild(infoBlockInAddition);
        inAddition.appendChild(holder);
        return inAddition;
    }
}
export default InAddition;
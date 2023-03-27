import { APP_PETS } from "../../assets/dataPets";

class PetsBlock {
    constructor() {
        return this.init();
    }

    init() {
        return this.render();
    }

    render() {
        const pets = document.createElement('div');
        pets.classList.add('pets');

        const h1 = document.createElement('h1');
        h1.innerHTML = "Our friends who are looking for a house" ;

        const paginationList = document.createElement('div');
        paginationList.classList.add('paginationList');

        const paginationNumbers = document.createElement('div');
        paginationNumbers.classList.add('paginationNumbers');
        const btnLeftMax = document.createElement('button');
        const btnLeft = document.createElement('button');
        const btnRightMax = document.createElement('button');
        const btnRight = document.createElement('button');
        const numberOfPage = document.createElement('span');
        btnLeftMax.innerHTML = '<<';
        btnLeft.innerHTML = '<';
        btnRightMax.innerHTML = '>>';
        btnRight.innerHTML = '>';
        numberOfPage.innerHTML = '1';
        paginationNumbers.appendChild(btnLeftMax);
        paginationNumbers.appendChild(btnLeft);
        paginationNumbers.appendChild(numberOfPage);
        paginationNumbers.appendChild(btnRight);
        paginationNumbers.appendChild(btnRightMax);
        
        APP_PETS.forEach((card) => {
            const cardElement = document.createElement('div');
            const img = document.createElement('img');
            const p = document.createElement('p');
            const btn = document.createElement('button');

            img.src = card.img;
            img.alt = card.title;
            p.innerHTML = card.title;
            btn.innerHTML = 'Learn more';

            cardElement.appendChild(img);
            cardElement.appendChild(p);
            cardElement.appendChild(btn);
            paginationList.appendChild(cardElement);
        });
        
        pets.appendChild(h1);
        pets.appendChild(paginationList);
        pets.appendChild(paginationNumbers);
        return pets;
    }
}
export default PetsBlock;
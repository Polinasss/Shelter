import { APP_CARDS } from '../../assets/dataHelp';

class HelpBlock {
    constructor() {
        return this.init();
    }

    init() {
        return this.render();
    }

    render() {
        const help = document.createElement('div'); //создали общий див секции
        help.classList.add('help');

        const holder = document.createElement('div'); //создали контейнер
        holder.classList.add('container');

        const h2 = document.createElement('h2'); //заголовок
        h2.innerHTML = "How you can help our shelter";
        
        const infoList = document.createElement('div'); //блок с информацией
        infoList.classList.add('infoList');


        APP_CARDS.forEach((card) => { //создание 9 карточек
            const list = document.createElement('div');
            const p = document.createElement('p');
            const img = document.createElement('img');
            p.innerHTML = card.title;
            img.src = card.img;
            img.alt = card.title;
            list.appendChild(img);
            list.appendChild(p);
            infoList.appendChild(list);
        });

        holder.appendChild(h2);
        holder.appendChild(infoList);
        help.appendChild(holder);
        return help;
    }
}
export default HelpBlock;
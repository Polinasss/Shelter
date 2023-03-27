import imgPath from '@assets/start-screen-puppy';

class NotOnlyBlock {
    constructor() {
        return this.init();
    }

    init() {
        return this.render();
    }

    render() {
        const notOnly = document.createElement('div'); //создали общий див секции
        notOnly.classList.add('not-only');

        const holder = document.createElement('div'); //создали контейнер
        holder.classList.add('container');

        const infoBlockNotOnly = document.createElement('div'); //блок с информацией
        infoBlockNotOnly.classList.add('infoBlockNotOnly');

        const infoBlockText = document.createElement('div'); //текст
        infoBlockText.classList.add('infoBlock__text');
        const h1 = document.createElement('h1');
        h1.innerHTML = "Not only people need a house";
        const p = document.createElement('p');
        p.innerHTML = "We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!";
        const btn = document.createElement('button');
        btn.innerHTML = "Make a friend";
        infoBlockText.appendChild(h1);
        infoBlockText.appendChild(p);
        infoBlockText.appendChild(btn);

        const infoBlockDogIMG = document.createElement('div'); //картинка
        infoBlockDogIMG.classList.add('infoBlock__img');
        const img = document.createElement('img');
        img.alt = 'start-screen-puppy';
        img.src = imgPath;
        infoBlockDogIMG.appendChild(img);

        infoBlockNotOnly.appendChild(infoBlockText);
        infoBlockNotOnly.appendChild(infoBlockDogIMG);
        holder.appendChild(infoBlockNotOnly);
        notOnly.appendChild(holder);
        return notOnly;
    }
}
export default NotOnlyBlock;
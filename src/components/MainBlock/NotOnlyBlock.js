import imgPath from '@assets/start-screen-puppy';
import startScreenBackground from '@assets/start-screen-background';
import startScreenGradient from '@assets/start-screen-gradient';

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
        notOnly.style.background = `url(${startScreenGradient}), url(${startScreenBackground})`;
        notOnly.style.backgroundRepeat = 'no-repeat';
        notOnly.style.backgroundSize = 'cover';

        const holder = document.createElement('div'); //создали контейнер
        holder.classList.add('container');

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

        holder.appendChild(infoBlockText);
        holder.appendChild(infoBlockDogIMG);
        notOnly.appendChild(holder);
        return notOnly;
    }
}
export default NotOnlyBlock;
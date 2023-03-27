import imgLeft from '@assets/arrowLeft';
import imgRight from '@assets/arrowRight';

import { APP_SLIDER } from '../../assets/dataOurFriends';

class OurFriendsBlock {
    constructor() {
        return this.init();
    }

    init() {
        return this.render();
    }

    render() {
        const ourFriends = document.createElement('div'); //создали общий див секции
        ourFriends.classList.add('our-friends');

        const holder = document.createElement('div'); //создали контейнер
        holder.classList.add('container');

        const h2 = document.createElement('h2'); //приветствие
        h2.innerHTML = "Our friends who are looking for a house";

        const slider = document.createElement('div'); //блок со слайдером
        slider.classList.add('slider');

        const btnLeft = document.createElement('button'); //левая кнопка
        const imgBtn1 = document.createElement('img');
        imgBtn1.src = imgLeft;
        imgBtn1.alt = 'arrowLeft';

        const btnRight = document.createElement('button'); //правая кнопка
        const imgBtn2 = document.createElement('img');
        imgBtn2.src = imgRight;
        imgBtn2.alt = 'arrowRight';

        btnLeft.appendChild(imgBtn1);
        btnRight.appendChild(imgBtn2);

        const getToKnowTheRestBtn = document.createElement('button'); //нижняя кнопка
        getToKnowTheRestBtn.classList.add('getToKnowTheRestBtn');
        getToKnowTheRestBtn.innerHTML = 'Get to know the rest';

        slider.appendChild(btnLeft); 

        APP_SLIDER.forEach((card) => {
            const sliderElement = document.createElement('div');
            sliderElement.classList.add('sliderElement1');
            const img = document.createElement('img');
            const p = document.createElement('p');
            const btn = document.createElement('button');
            img.src = card.img;
            img.alt = card.title;
            p.innerHTML = card.title;
            btn.innerHTML = 'Learn more';
            sliderElement.appendChild(img);
            sliderElement.appendChild(p);
            sliderElement.appendChild(btn);
            slider.appendChild(sliderElement);
        });

        slider.appendChild(btnRight);

        holder.appendChild(h2);
        holder.appendChild(slider);
        holder.appendChild(getToKnowTheRestBtn);
        ourFriends.appendChild(holder);
        return ourFriends;
    }
}
export default OurFriendsBlock;
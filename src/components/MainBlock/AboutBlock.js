import imgPath from '@assets/about-pets';

class AboutBlock {
    constructor() {
        return this.init();
    }

    init() {
        return this.render();
    }

    render() {
        const about = document.createElement('div'); //создали общий див секции
        about.classList.add('about');

        const holder = document.createElement('div'); //создали контейнер
        holder.classList.add('container');

        const infoBlockAbout = document.createElement('div'); //блок с информацией
        infoBlockAbout.classList.add('infoBlockAbout');

        const infoBlockText = document.createElement('div'); //текст
        infoBlockText.classList.add('infoBlockAbout__text');
        const h2 = document.createElement('h2');
        h2.innerHTML = "About the shelter “Cozy House”";
        const p1 = document.createElement('p');
        p1.innerHTML = "Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.";
        const p2 = document.createElement('p');
        p2.innerHTML = "We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.";

        infoBlockText.appendChild(h2);
        infoBlockText.appendChild(p1);
        infoBlockText.appendChild(p2);

        const infoBlockDogIMG = document.createElement('div'); //картинка
        infoBlockDogIMG.classList.add('infoBlockAbout__img');
        const img = document.createElement('img');
        img.alt = 'about-pets';
        img.src = imgPath;
        infoBlockDogIMG.appendChild(img);

        infoBlockAbout.appendChild(infoBlockText);
        infoBlockAbout.appendChild(infoBlockDogIMG);
        holder.appendChild(infoBlockAbout);
        about.appendChild(holder);
        return about;
    }
}
export default AboutBlock;
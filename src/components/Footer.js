import footerPuppy from "@assets/footer-puppy";
import emailImg from "@assets/icon-email";
import telImg from "@assets/icon-phone";
import geoImg from "@assets/icon-marker";
import footerGradient from '@assets/footer-gradient-background';
import footerBackground from "@assets/footer-background";

class FooterBlock {
    constructor() {
        return this.init();
    }

    init() {
        return this.render();
    }

    render() { //создали футер для
        const footer = document.createElement('footer');
        const holder = document.createElement('div');
        holder.classList.add('container');
        footer.style.backgroundImage = `url(${footerGradient}), url(${footerBackground})`;
        footer.style.backgroundRepeat = 'no-repeat';
        footer.style.backgroundSize = 'cover';

        const contactsSection = document.createElement('section');
        const h2Contacts = document.createElement('h2');
        h2Contacts.innerHTML = "For questions and suggestions";
        const a1Contacts = document.createElement('a');
        const spanA1 = document.createElement('span');
        spanA1.innerHTML = 'email@shelter.com';
        const mail = document.createElement('img');
        const tel = document.createElement('img');
        mail.src = emailImg;
        mail.alt = 'mail';
        tel.src = telImg;
        tel.alt = 'tel';
        a1Contacts.href ="mailto:email@shelter.com";
        a1Contacts.appendChild(mail);
        a1Contacts.appendChild(spanA1);
        
        const a2Contacts = document.createElement('a');
        const spanA2 = document.createElement('span');
        spanA2.innerHTML = '+13 674 567 75 54';
        a2Contacts.href = "tel:+13 674 567 75 54";
        a2Contacts.appendChild(tel);
        a2Contacts.appendChild(spanA2);

        contactsSection.appendChild(h2Contacts);
        contactsSection.appendChild(a1Contacts);
        contactsSection.appendChild(a2Contacts);

        const visitSection = document.createElement('section');
        const h2Visits = document.createElement('h2');
        h2Visits.innerHTML = "We are waiting for your visit";
        visitSection.appendChild(h2Visits);
        const pVisits1 = document.createElement('p');
        const pVisits2 = document.createElement('p');
        const geo1 = document.createElement('img');
        geo1.src = geoImg;
        geo1.alt = 'geo';
        const geo2 = document.createElement('img');
        geo2.src = geoImg;
        geo2.alt = 'geo';
        const spanGeo1 = document.createElement('span');
        const spanGeo2 = document.createElement('span');
        spanGeo1.innerHTML ="1 Central Street, Boston (entrance from the store)";
        spanGeo2.innerHTML ="18 South Park, London";
        pVisits1.appendChild(geo1);
        pVisits2.appendChild(geo2);
        pVisits1.appendChild(spanGeo1);
        pVisits2.appendChild(spanGeo2);
        visitSection.appendChild(pVisits1);
        visitSection.appendChild(pVisits2);

        const dogImgSection = document.createElement('section');
        const dogImg = document.createElement('img');
        dogImg.src = footerPuppy;
        dogImg.alt = 'footer-puppy';
        dogImgSection.appendChild(dogImg);

        holder.appendChild(contactsSection);
        holder.appendChild(visitSection);
        holder.appendChild(dogImgSection);
        footer.appendChild(holder);
        return footer;
    }
}
export default FooterBlock;
import footerPuppy from "@assets/footer-puppy";
import emailImg from "@assets/icon-email";
import telImg from "@assets/icon-phone";
import geoImg from "@assets/icon-marker";

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

        const contactsSection = document.createElement('section');
        const h2Contacts = document.createElement('h2');
        h2Contacts.innerHTML = "For questions and suggestions";
        const a1Contacts = document.createElement('a');
        const mail = document.createElement('img');
        const tel = document.createElement('img');
        mail.src = emailImg;
        mail.alt = 'mail';
        tel.src = telImg;
        tel.alt = 'tel';
        a1Contacts.href ="mailto:email@shelter.com";
        a1Contacts.innerHTML = 'email@shelter.com';
        a1Contacts.appendChild(mail);
        const a2Contacts = document.createElement('a');
        a2Contacts.href = "tel:+13 674 567 75 54";
        a2Contacts.innerHTML = '+13 674 567 75 54'
        a2Contacts.appendChild(tel);

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
        pVisits1.innerHTML ="1 Central Street, Boston (entrance from the store)";
        pVisits2.innerHTML ="18 South Park, London";
        pVisits1.appendChild(geo1);
        pVisits2.appendChild(geo2);
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
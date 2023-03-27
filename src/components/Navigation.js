import { APP_ROUTES } from "../assets/dataNavigation";

class NavigationBlock {
    constructor() {
        return this.init();
    }

    init() {
        return this.render();
    }

    render() { //создание header и меню
        const header = document.createElement('header');
        const logo = document.createElement('div');
        const nav = document.createElement('nav');
        const holder = document.createElement('div');

        Object.keys(APP_ROUTES).forEach((route) => { //получаем массив и проходимся по нему
            const a = document.createElement('a');
            a.innerHTML = APP_ROUTES[route];
            a.href = '#';
            a.id = route;
            nav.appendChild(a);
        });
        //деллигируем события - когда мы назначаем событие контейнеру и за счет всплытия события мы фильтруем его
        nav.addEventListener('click', (e) => {
            if(e.target.tagName === 'A') {
                e.preventDefault(); //предотвращаем всплытие дефолтное события у ссылок
                e.target.id === "helpTheShelter" || e.target.id === "contacts" ? alert('Таких страничек нет') : window.location.hash = e.target.id; //хэш будет равен названию поля объекта
            } else {
                return;
            }
        });

        const cozyHouse = document.createElement('p');
        const bostonShelter = document.createElement('p');
        cozyHouse.innerHTML = 'Cozy House';
        bostonShelter.innerHTML = 'Shelter for pets in Boston';

        holder.classList.add('container');
        logo.classList.add("logo");

        logo.appendChild(cozyHouse);
        logo.appendChild(bostonShelter);
        holder.appendChild(logo);
        holder.appendChild(nav);
        header.appendChild(holder);
        return header;
    }
}
export default NavigationBlock;
import { APP_ROUTES } from "../assets/dataNavigation";

export const arr = [];
export const cozyHouse = document.createElement('p');
export const bostonShelter = document.createElement('p');

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
            a.href = '#'+route;
            a.id = route;
            arr.push(a);
            a.classList.add('navLinks');
            nav.appendChild(a);
        });
        //деллигируем события - когда мы назначаем событие контейнеру и за счет всплытия события мы фильтруем его
        nav.addEventListener('click', (e) => {
            if(e.target.tagName === 'A') {
                e.preventDefault(); //предотвращаем всплытие дефолтное события у ссылок
                if (e.target.id === "helpTheShelter" || e.target.id === "contacts"){return e.target} else {window.location.hash = e.target.id; e.target.classList.add('active');} //хэш будет равен названию поля объекта
            } else {
                return;
            }
        });
        

        
        cozyHouse.id = 'cozyHouse';
        bostonShelter.id = 'bostonShelter';
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
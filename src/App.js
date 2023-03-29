//Совершаем маунтинг компонентов
import PetsBlock from './components/PetsBlock';
import MainBlock from "./components/MainBlock";
import FooterBlock from './components/Footer';
import NavigationBlock from './components/Navigation';
import { arr } from './components/Navigation';
import { cozyHouse, bostonShelter } from './components/Navigation';
import favicon from '@assets/favicon.ico';

const link = document.createElement('link');
link.rel = 'icon';
link.href = favicon;
document.head.appendChild(link);
class App {
    constructor(container) {
        return this.init(container)
    }

    renderNavigation(container) { //создание header и меню
        const navigationComponent = new NavigationBlock();
        container.appendChild(navigationComponent);
        return
    }

    renderFooter(container) {
        const footerComponent = new FooterBlock();
        container.appendChild(footerComponent);
        return
    }

    renderMainBlock(container) {
        const main = new MainBlock(container);
        return 
    };

    renderPetsBlock(container) {
        const pets = new PetsBlock();
        container.appendChild(pets);
        return
    };

    init(container) { //вызывает render. функция init делает внутри себя всю инициализирующую работу не касающуюся рендеринга
        //обработчики и прочая работа
        window.onhashchange = () => {
            this.render(container);
        };
        return this.render(container);
    }
    render(container) { //в методе render(){} осуществляется маунтинг компонента
        const el = document.createElement('div'); //блок куда будем вставлять всееее элементы
        this.renderNavigation(el);
        
        // !!! сделать потом проверку, если document.getElementById('header') и document.getElementById('footer') есть, то не вызывать перерисовку этих компонентов

        switch(window.location.hash.slice(1)) {
            case 'aboutTheShelter':
                arr[0].classList.add('active');
                this.renderMainBlock(el);
                cozyHouse.style.color = '#F1CDB3';
                bostonShelter.style.color = 'white';
                break;
            case 'ourPets': 
                arr[1].classList.add('active');
                this.renderPetsBlock(el);
                arr.forEach((elem) => {elem.classList.add('ourPetsNav')});
                cozyHouse.style.color = '#545454';
                bostonShelter.style.color = '#545454';
                break;
            default:
        }
        container.innerText = ``; //удаляем прошлое содержимое
        container.appendChild(el);
        this.renderFooter(el);
    }
}
export default App;
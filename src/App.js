//Совершаем маунтинг компонентов
import PetsBlock from './components/PetsBlock';
import MainBlock from "./components/MainBlock";
import FooterBlock from './components/Footer';
import NavigationBlock from './components/Navigation';
alert('Господа проверяющие, оооочень прошу прощения, проверьте работу 30-ого числа!!! Я усложнила себе жизнь, сделав SPA. К 30-ому всё будет готово :(');
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
                this.renderMainBlock(el);
                break;
            case 'ourPets': 
                this.renderPetsBlock(el); 
                break;
            default:
        }
        container.innerText = ``; //удаляем прошлое содержимое
        container.appendChild(el);
        this.renderFooter(el);
    }
}
export default App;
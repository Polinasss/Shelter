import NotOnlyBlock from './NotOnlyBlock';
import AboutBlock from './AboutBlock';
import OurFriendsBlock from './OurFriends';
import HelpBlock from './Help';
import InAddition from './InAddition';

class MainBlock {
    constructor(container) {
        this.init(container);
    }

    init(container) {
        this.render(container);
    }

    renderNotOnlyBlock(container) {
        const notOnly = new NotOnlyBlock();
        container.appendChild(notOnly);
        return
    }
    renderAboutBlock(container) {
        const about = new AboutBlock();
        container.appendChild(about);
        return
    }
    renderOurFriendsBlock(container) {
        const ourFriends = new OurFriendsBlock();
        container.appendChild(ourFriends);
        return
    }
    renderHelpBlock(container) {
        const help = new HelpBlock();
        container.appendChild(help);
        return
    }
    renderInAdditionBlock(container) {
        const addition = new InAddition();
        container.appendChild(addition);
        return
    }

    render(container) {
        const mainContainer = document.createElement('main');
        this.renderNotOnlyBlock(mainContainer);
        this.renderAboutBlock(mainContainer);
        this.renderOurFriendsBlock(mainContainer);
        this.renderHelpBlock(mainContainer);
        this.renderInAdditionBlock(mainContainer);
        container.appendChild(mainContainer);
    }
}
export default MainBlock;
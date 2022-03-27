import './menu-container';

class Menu extends HTMLElement {
    set menu(menu) {
        this._menu = menu;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="tab">
                <button class="tablinks active" name="foods">
                    Foods
                </button>
                <button class="tablinks" name="drinks">
                    Drinks
                </button>
            </div>

            <div id="foods" class="tabcontent" style="display: block;">
                <menu-container name="foods"></menu-container>
            </div> 

            <div id="drinks" class="tabcontent">
                <menu-container name="drinks"></menu-container>
            </div>
        `;

        const menuList = document.querySelectorAll(`menu-container`);
        const menusArray = Object.keys(this._menu).map((key) => {
            const menu = {
                name: key,
                menu: this._menu[key]
            };
            return menu;
        });

        Object.keys(this._menu).forEach((key, menu) => {
            if (key === 'foods') {
                menuList[0].container = menusArray[menu];
            } else {
                menuList[1].container = menusArray[menu];
            }
        });
    }
}
customElements.define('menu-elements', Menu);

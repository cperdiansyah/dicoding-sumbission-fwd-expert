import './menu-list';
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
                
                <menu-list name="foods"></menu-list>
            </div>

            <div id="drinks" class="tabcontent">
                <menu-list name="drinks"></menu-list>
            </div>

        `;
        const menuFood = document.querySelector(`menu-list[name="foods"]`);
        const menuDrinks = document.querySelector(`menu-list[name="drinks"]`);

        const menusArray = Object.keys(this._menu).map((key) => {
            const menu = {
                name: key,
                menu: this._menu[key]
            };
            return menu;
        });

        Object.keys(this._menu).forEach((key, menu) => {
            if (key == 'foods') {
                menuFood.menuList = menusArray[menu];
            } else {
                menuDrinks.menuList = menusArray[menu];
            }
        });
    }
}
customElements.define('menu-elements', Menu);

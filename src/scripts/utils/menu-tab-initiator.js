const MenuTabInitiator = {
    async init({ tabEvent }) {
        this._onTabSelect(tabEvent);
    },
    _onTabSelect(event) {
        const _event = event;
        const tabcontent = document.querySelectorAll('.tabcontent');
        tabcontent.forEach((content) => {
            const _content = content;
            _content.style.display = 'none';
        });

        const tablinks = document.querySelectorAll('.tablinks');
        tablinks.forEach((link) => {
            const _link = link;
            _link.className = link.className.replace(' active', '');
        });

        document.getElementById(_event.target.name).style.display = 'block';
        _event.currentTarget.className += ' active';
    }
};
export default MenuTabInitiator;

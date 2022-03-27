const BackToTopInitiator = {
    init({ button, window }) {
        this.button = button;
        this.window = window;

        this.window.addEventListener('scroll', () => {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                this.button.style.bottom = '15px';
            } else {
                this.button.style.bottom = '-50px';
            }
        });

        this.button.addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }
};

export default BackToTopInitiator;

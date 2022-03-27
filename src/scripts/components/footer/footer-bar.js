class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="container">
            <div class="footer-wrapper">
                <div class="footer-brand" tabindex="0">
                    <a class="brand_title color-primary" href="#">
                        Makan<span class="color-secondary">.in</span>
                    </a>
                    <p class="footer-description" tabindex="0">
                        We’ll made the best dining experience and memorable
                    </p>
                </div>

                <div class="footer-links-wrapper">
                    <div class="service" tabindex="0">
                        <h3 class="footer-links-tittle" tabindex="0">Our Services</h3>

                        <ul class="link-list">
                            <li class="link-item"><a href="#">Favorite</a></li>
                            <li class="link-item">
                                <a href="#">Find Resto</a>
                            </li>
                            <li class="link-item"><a href="#">FAQ</a></li>
                        </ul>
                    </div>
 
                    <div class="explore" tabindex="0">
                        <h3 class="footer-links-tittle" tabindex="0">Explore Us</h3>

                        <ul class="link-list">
                            <li class="link-item">
                                <a href="#">Our Careers</a>
                            </li>
                            <li class="link-item"><a href="#">Privacy</a></li>
                            <li class="link-item">
                                <a href="#">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>

                    <div class="connect" tabindex="0">
                        <h3 class="footer-links-tittle" tabindex="0">Connect Us</h3>

                        <ul class="link-list">
                            <li class="link-item">
                                <a href="mailto:support@makanin.id"
                                    >support@makanin.id</a
                                >
                            </li>
                            <li class="link-item">
                                <a href="tel:622122081996">021 - 2208 - 1996</a>
                            </li>
                            <li class="link-item">
                                <span>Singaparna, Tasikmalaya, Jawa Barat</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom" tabindex="0">
                <span>Copyright 2021 • All rights reserved • Makan.in</span>
            </div>
        </div>
`;
    }
}
customElements.define('footer-bar', FooterBar);

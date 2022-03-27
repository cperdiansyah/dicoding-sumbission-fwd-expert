class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <div class="img-wrapper">
				<div class="gradient"></div>
				<img
					src="./images/hero/hero-image_2.jpg"
					alt="Hero Image"
					loading="lazy"
				/>
 
				<div class="text-wrapper container">
					<div class="text">
						<h1>
							Find<span class="text-mark"> A Good Place,</span>
						</h1>
						<div class="overlay"></div>
						<h1>
							Start Your
							<span class="text-mark">Good Taste</span>
						</h1>

						<div class="overlay"></div>
					</div>
				</div>
			</div>
        `;
    }
}
customElements.define('hero-banner', Hero);

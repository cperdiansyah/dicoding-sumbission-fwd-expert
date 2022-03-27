class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="img-wrapper">
				
			 	<picture>
					<source media="(max-width: 425px)" srcset="./images/hero-gradient-small.jpg">

				 	<source media="(max-width: 768px)" srcset="./images/hero-gradient-large.jpg">
                
					<img
						class="lazyload" 
						data-src="./images/hero-gradient.jpg"
						alt="Hero Image" 
					/>
				</picture>
 
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

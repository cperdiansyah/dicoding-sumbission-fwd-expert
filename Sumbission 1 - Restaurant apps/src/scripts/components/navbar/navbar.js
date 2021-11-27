import template from '../../utils';
import html from './navbar/html';
class Actor extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `${template(html)}`;
	}
}

customElements.define('actor-section', Actor);

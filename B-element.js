import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';
class hostB extends PolymerElement{
	static get template(){
		return( html`
			<style>*{background:lightgray;}</style><h3>hello from element B</h3><h5>why is background color no working?It will work with * and not :host. Because A is the host and B is not.</h5>

			` );
	}
	constructor(){super();}
}
customElements.define('element-b',hostB);
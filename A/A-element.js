import {PolymerElement,html} from "@polymer/polymer/polymer-element.js";
import '../B-element.js';

class hostA extends PolymerElement{
	static get template(){return(
		html`<style>:host{color:red;}</style><p>this is a paragraph in element a.</p><section><element-b></element-b></section><hr />`
	);}

}
customElements.define('element-a',hostA);
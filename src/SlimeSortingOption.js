// dependencies / things imported
import { LitElement, html, css } from 'lit';


// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class SlimeSortingOption extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'slime-sorting-option';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.option = 'option';

  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      order: { type: Number, reflect: false },

    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      /*
      if (propName === 'need' && this[propName] === 'joy') {
        this.classList.add('joyful');
      }
      */
    });
  }




  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }





  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }




  // CSS - specific to Lit
  static get styles() {
    return css`

    :host {
      border: 2px black solid;
      border-radius: 5px;
      width: 95%;
      margin-top: 2px;
      margin-bottom: 2px;
      height: 25px;
      display: flex;
      align-items: center;
      box-shadow: 1px 1px 1px;
 
      
    }

    .option-slot-wrapper{
      width: inherit;
      background-color: inherit;
      border: none;
      text-align: inherit;

    }

    .option-slot-wrapper :hover {
      cursor: grab;
    }

    .option-slot-wrapper :active {
      cursor: grabbing;
    }
   

    

  
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
    <button class="option-slot-wrapper"><slot></slot></button>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/rename-me.haxProperties.json`, import.meta.url).href;
  }
}

//define element

window.customElements.define(SlimeSortingOption.tag, SlimeSortingOption);
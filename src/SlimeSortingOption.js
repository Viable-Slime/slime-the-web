// dependencies / things imported
import { LitElement, html, css } from 'lit';



// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class SlimeSortingOption extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'slime-sorting-option';
  }

  getCurrentPosition(){
    this.style.setProperty("--option-background-color","darkgray");
    this.removeAttribute("correct");
    this.removeAttribute("incorrect");
    var mouseTracker = window.event;
    var posY = mouseTracker.clientY;
    this.currentPosition = posY;
  }

  DragStart(){

    //distance above or below current pos to switch index
    var changeBuffer = 30;

   // this.style.visibility = "hidden";
    var mouseTracker = window.event;
    
    var posY = mouseTracker.clientY;
    //drag stop counts as drag for some reason so make sure not to set drag pos to zero
    if(posY!=0){
      this.dragPosition = posY;
    }
    var element = this;
    var parent = this.parentNode;

    //going up
    if( (this.dragPosition + changeBuffer) < this.currentPosition){
      //find old index
      var oldIndex;
      for(var i = 0; i < parent.children.length; i++){
        if(parent.children[i].isEqualNode(element)){
          oldIndex = i;        
          }
      }
      //set new index
      if(oldIndex!=0){
        parent.insertBefore(element,parent.children[(oldIndex-1)]);
        this.currentPosition = this.dragPosition;
        return;
      }
    
    }

    //going down
    if( (this.dragPosition - changeBuffer) > this.currentPosition){
      //find old index
      var oldIndex;
      for(var i = 0; i < parent.children.length; i++){
        if(parent.children[i].isEqualNode(element)){
          oldIndex = i;
          }
      }
      //set new index
      if(oldIndex!=parent.children.length -1){
        parent.insertBefore(parent.children[(oldIndex+1)],element);
        this.currentPosition = this.dragPosition;
        return;
      }
     
    }

  }


   DragEnd(){
   
    this.style.visibility = "visible";
    this.style.setProperty("--option-background-color","inital");
  }


  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    
    this.option = 'option';
    this.currentPosition = 0;
    this.dragPosition = 0;
    
    

    this.setAttribute("draggable",true);
    this.addEventListener("mousedown",this.getCurrentPosition);
    this.addEventListener("drag",this.DragStart);
    this.addEventListener("dragend",this.DragEnd);
    this.addEventListener("mouseup",this.DragEnd);
    
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      order: { type: Number, reflect: false },
      dragPosition: {type: Number},
      currentPosition: {type: Number}

    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
     
      
      if (propName === 'dragPosition') {
        //console.log("updated:" + this.dragPosition);
      }


      
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
      margin-top: 5px;
      margin-bottom: 5px;
      height: 25px;
      display: flex;
      align-items: center;
      box-shadow: 1px 1px 1px;
      cursor: grab;
      z-index: 1;
      background-color: var(--option-background-color,white);
      
    }

    :host([correct]){
      transition: background-color 0.7s linear;
      background-color: var(--option-background-color-correct,#3deb3d87);
    }

    :host([incorrect]){
      transition: background-color 0.7s linear;
      background-color: var(--option-background-color-incorrect,red);
    }

    .option-slot-wrapper{
      display: block;
      z-index: 2;
      width: 100%;
      height: 100%;
      background-color: inherit;
      border: none;
      text-align: inherit;
  

    }

    :host button{
      cursor: grab;
    }

    :host button:active {

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
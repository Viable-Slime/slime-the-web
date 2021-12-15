// dependencies / things imported

//TO Do: -> HAX Wiring, Polish Code, Publish to NPM



import { LitElement, html, css } from 'lit';



// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class SlimeSortingOption extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'sorting-option';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      dark: {type: Boolean},
      disabled: {type: Boolean}

    };
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super(); 
    this.option = 'option';
    this.setAttribute("draggable",true);
    this.addEventListener("mousedown",this.getCurrentPosition);
    this.addEventListener("drag",this.DragStart);
    this.addEventListener("dragend",this.DragEnd);
    this.addEventListener("mouseup",this.DragEnd);
  }
  
  getCurrentPosition(){
    if(!this.disabled){

      if(this.dark){
        this.style.backgroundColor = "#b7e8f591";
      }else{
        this.style.backgroundColor = "darkgray";
      }
      this.removeAttribute("correct");
      this.removeAttribute("incorrect");

      var mouseTracker = window.event;
      var posY = mouseTracker.clientY;
      this.currentPosition = posY;

    }
   
  }

  DragStart(){


    if(!this.disabled){

      //distance above or below current pos to switch index
    var changeBuffer = 30;
      

    //if slottted images increase change buffer size
    if(this.querySelectorAll('img').length > 0){
      changeBuffer = 70;
    }


    // this.style.visibility = "hidden";
     var mouseTracker = window.event;
     var posY = mouseTracker.clientY;
     //drag stop counts as drag for some reason so make sure not to set drag pos to zero
     if(posY!=0 && posY>0){this.dragPosition = posY;}
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

    
  }

   DragEnd(){
     if(!this.disabled){
      if(this.dark){
        this.style.backgroundColor = "lightgray";
      }else{
        this.style.backgroundColor = "white";
      }
     }
  }


  //To Do: change color of up arrowed otption to see which one moved better
    // then reset the color of all other options 


  upArrowSort(element){
    if(!this.disabled){
      var parent = element.parentNode;
      parent.childNodes.forEach((child)=>{
        if(child.tagName==="SORTING-OPTION"){
          
          if(this.dark){
            child.style.backgroundColor = "#lightgray";
          }else{
            child.style.backgroundColor = "white";
          }
        }
      });
      if(this.dark){
        this.style.backgroundColor = "#b7e8f591";
      }else{
        this.style.backgroundColor = "darkgray";
      }
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
         this.shadowRoot.querySelector("#upArrow").focus();
         return;
       }
       //keep focus on up-sort
       
      
    }
  }



  downArrowSort(element){
    if(!this.disabled){
      var parent = element.parentNode;
      parent.childNodes.forEach((child)=>{
        if(child.tagName==="SORTING-OPTION"){
          
          if(this.dark){
            child.style.backgroundColor = "#lightgray";
          }else{
            child.style.backgroundColor = "white";
          }
        }
      });
    if(this.dark){
      this.style.backgroundColor = "#b7e8f591";
    }else{
      this.style.backgroundColor = "darkgray";
    }
    
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
       return;
     }
    }
  }

  

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'dragPosition') { 
      }

     
      
    });
  }


  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);    
      if(this.parentElement.getAttribute("dark")!= (null || undefined) ){
        this.setAttribute("dark",true);
      }
      var el = this;
      this.shadowRoot.querySelector('#upArrow').addEventListener('click',function(){
            el.upArrowSort(el);  
      });
      //add same event listener for enter key
      this.shadowRoot.querySelector('#upArrow').addEventListener('keypress',function(e){
        if(e.key==="Enter"){
          el.upArrowSort(el);  
          }
        
      });
      this.shadowRoot.querySelector('#downArrow').addEventListener('click',function(){
            el.downArrowSort(el);  
      });
      //add same event listener for enter key
      this.shadowRoot.querySelector('#downArrow').addEventListener('keypress',function(e){
        if(e.key==="Enter"){
          el.downArrowSort(el);  
          }
      });
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
      height: 100%;
      min-height: 25px;
      display: flex;
      align-items: center;
      box-shadow: 1px 1px 1px;
      cursor: grab;
      z-index: 1;
      background-color: var(--option-background-color,white);
      overflow: hidden;

      
    }

    :host([dark]){

      background-color: var(--option-background-color,lightgray);
      border-color: #a8a8a8;
      box-shadow: 1px 1px 1px #aaa7a7;
      color: white;
    }

    :host([correct]){
      transition: background-color 0.7s linear;
      background-color: var(--option-background-color-correct,#3deb3dcc) !important;
    }

    :host([incorrect]){
      transition: background-color 0.7s linear;
      background-color: var(--option-background-color-incorrect,#f94343f7) !important;
    }

    

  
    .option-slot-wrapper{
      display: flex;
      align-items: center;
      z-index: 2;
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      text-align: inherit;
      font-weight: bold;
    }
    :host button{
      cursor: grab;
      font-weight: bold;
    }
    :host button:active {
      cursor: grabbing;
    }

    :host(dark) ::slotted(*){
      color: white;
    }


    ::slotted(*){
     
     max-height: 75px;
      
    }

   


    .arrow-container{
      display: flex;
      justify-content: flex-end;
      padding-right: 5px;
      position: relative;
      right: 0px;
      width: 20%;
      height: 100%;
      background-color: transparent;
      align-items: center;
    }

    .arrow{
      height: 15px;
      width: 15px;
      border-style: solid;
      border-width: 1px;
      border-color: black;
      cursor: pointer;
      margin-left: 1px;
      margin-right: 1px;
      border-radius: 5px;
      box-shadow: 0px 0px 1px 0px;
    }

    :host([dark]) .arrow{
      box-shadow: 0px 0px 1px 0px;
    }
    
    .up-arrow{
      transform: rotate(270deg);
    }
    
    .down-arrow{
      transform: rotate(90deg);
    }


    .feedback-container{
      width: fit-content;
      display: flex;
      height: 100%;
      align-items: center;
      padding-left: 5px;
      background-color: transparent;
    }

    
    
    #correct-icon{
      display: none;
      height: 15px;
      width: 15px;
      border-radius: 2px;
      box-shadow: 0px 1px 1px 0px;
    }

    #incorrect-icon{
      display: none;
      height: 15px;
      width: 15px;
      border-radius: 2px;
      box-shadow: 0px 1px 1px 0px;
    }



    `;
  }




  // HTML - specific to Lit
  render() {

    

    

    return html`

    <div class="feedback-container">
    <img id="correct-icon" src="./src/images/correctIcon.png" alt="correct answer" label="correct"></img>
    <img id="incorrect-icon" src="./src/images/incorrectIcon.png" alt="incorrect answer" label="incorrect"></img>
    </div>

    <button tabindex="-1" class="option-slot-wrapper"><slot></slot></button>

    <div class="arrow-container">
    <img tabindex="1" id="upArrow" class="arrow up-arrow" src="./src/images/arrow.png" alt="up arrow click me to move the option up"></img>
    <img tabindex="2" id="downArrow" class="arrow down-arrow" src="./src/images/arrow.png" alt="down arrow click me to move the option down"></img>
    </div>

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
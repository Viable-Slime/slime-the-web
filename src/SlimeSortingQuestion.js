// dependencies / things imported
import { SlimeSortingOption } from './SlimeSortingOption';
import { LitElement, html, css } from 'lit';


// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class SlimeSortingQuestion extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'slime-sorting-question';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.celebrate = false;
    this.shame = false;
    this.question = "Sort the following in order!";
    this.numberOfOptions = this.children.length;
    this.numberCorrrect = 0;
    this.correctOrder = [];



    //set order to be orginal order then scramble the options
    
    this.getCorrectOrder();
    setTimeout(this.randomizeOptions(),100);
    
  }

  getCorrectOrder(){
    let el = this;
    this.childNodes.forEach(function(child){
      if(child.tagName=="SLIME-SORTING-OPTION"){
        el.correctOrder.push(child);
      }
    });
  }


  randomizeOptions(){
    //loop through number of options and randomize their indexes
    let indexValues = [];
    for(var i = 0; i < this.numberOfOptions; i++){indexValues.push(i);}

    for(var i = 0; i < this.numberOfOptions; i++){

      var randomIndex1 = Math.floor(Math.random() * (this.numberOfOptions - 0) + 0);
      if(randomIndex1===undefined){randomIndex1 = 0;}

      let targetChild = this.children[(indexValues[randomIndex1])];

      var randomIndex2 = Math.floor(Math.random() * (indexValues.length - 0) + 0);
      if(randomIndex2===undefined){randomIndex2 = 0;}

      this.insertBefore(targetChild, this.children[(indexValues[randomIndex2])]);

    }
  }




  checkOrder(){
    var numCorrect = 0;
    for(var i = 0; i < this.numberOfOptions; i++){  
      if(this.children[i].isEqualNode(this.correctOrder[i])){
        numCorrect+=1;
        this.children[i].removeAttribute("incorrect");
        this.children[i].setAttribute("correct",true);
      }else{
        this.children[i].removeAttribute("correct");
        this.children[i].setAttribute("incorrect",true);
      }
      
    }
    this.numberCorrrect = numCorrect;
    if(this.celebrate){this.celebration(this.numberCorrrect,this.numberOfOptions);}
    if(this.shame){this.celebration(this.numberCorrrect,this.numberOfOptions);}
  }


  celebration(score, maximumScore){
    if(score==maximumScore){
      //play audio & disable button until audio play is over
      var audio = new Audio('src/mp3/Celebration1.mp3');
      var duration;
      var button = this.shadowRoot.querySelector(".submit-button");
      //show confetti
      var el = this;
      el.style.backgroundImage = "url(src/gifs/confetti.gif)";
      audio.play();
      button.disabled = true;
      audio.onloadeddata = function(){
        duration = Number.parseInt(audio.duration);
        setTimeout(()=>{
        button.disabled = false;
        el.style.backgroundImage = "none";
        },(duration * 1000));
      }
    }  
    else{
      //else if shame = true play failure audio :)
      if(this.shame){
        //play audio & disable button until audio play is over
       var audio = new Audio('src/mp3/wrong.mp3');
       var duration;
       var button = this.shadowRoot.querySelector(".submit-button");
       //show confetti
       var el = this;
       el.style.backgroundImage = "url(src/gifs/fire.gif)";
       audio.play();
       button.disabled = true;
       audio.onloadeddata = function(){
         duration = Number.parseInt(audio.duration);
         setTimeout(()=>{
         button.disabled = false;
         el.style.backgroundImage = "none";
         },(duration * 1000));
       }
      }
    }
  }




  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      question: { type: String, reflect: true },
      correctOrder: {type: Array},
      numberOfOptions: {type: Number},
      numberCorrrect: {type: Number},
      celebrate: {type: Boolean},
      shame: {type: Boolean}
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'need' && this[propName] === 'joy') {
        this.classList.add('joyful');
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
        background-color: var(--slime-sorting-question-background-color,white);
        border: 2px solid black;
        padding: 15px 10px;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: 2px 1px 2px -1px black;
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: bold;
        height: inherit;
        width: inherit;
      }


      :host([dark]){
        background-color: var(--slime-sorting-question-background-color,#161515ba);       
        color: white;
        
      }

      :host([dark]) .slime-sorting-controls button{
        color: white;
      }

      .slime-sorting-question-header{
        text-align: center;
        font-size: 20px;
        font-family: revert;
        margin-bottom: 10px;

      }

      
      .options{

        margin-bottom: 10px;

      }


      .slime-sorting-controls{

        display: flex;
        justify-content: space-between;
        padding-right: 5%;
        font-size: 20px;
        font-family: revert;
      }

     
      .submit-button{
      border-radius: 5px;
      border-width: 2px;
      cursor: pointer;
      background-color: inherit;
      box-shadow: 1px 1px 1px 0px;
      font-weight: bold;
      }

      :host([dark]) .submit-button{
        border-color: lightgray;
        box-shadow: 1px 1px 1px 0px #867b7b;
      }

      .submit-button:hover{
        opacity: 0.8;
      }

      .submit-button:active{
        cursor: default;
      }
      

    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div class="slime-sorting-question-header">${this.question}</div>
      <div class="options"><slot></slot></div>
      <div class="slime-sorting-controls"><span>You have ${this.numberCorrrect}/${this.numberOfOptions} correct.</span><button class="submit-button" @click="${this.checkOrder}">Submit</button></div>
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

window.customElements.define(SlimeSortingQuestion.tag, SlimeSortingQuestion);
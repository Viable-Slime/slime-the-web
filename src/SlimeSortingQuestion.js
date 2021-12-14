// dependencies / things imported
import { SlimeSortingOption } from './SlimeSortingOption';
import { LitElement, html, css } from 'lit';
import { I18NMixin } from "@lrnwebcomponents/i18n-manager/lib/I18NMixin.js";


// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class SlimeSortingQuestion extends  I18NMixin(LitElement) {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'sorting-question';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.celebrate = false;
    this.shame = false;
    this.numberOfOptions = this.children.length;
    this.numberCorrrect = 0;
    this.correctOrder = [];
    this.dark = false;
    this.mute = false;
    this.noBackground = false;
    

    this.question = "Sort the following in order!";
    this.t = {
      question: this.question,
      numCorrectLeft: "You Have",
      numCorrectRight: "Correct.",
      submit: "Submit"

    }
    this.registerLocalization({
      context: this,
      localesPath: new URL('../locales/', import.meta.url).href,
      locales: ["he", "ja", "es"],
    });


    //set order to be orginal order then scramble the options
    
    this.getCorrectOrder();
    setTimeout(this.randomizeOptions(),100);
    
  }

  getCorrectOrder(){
    let el = this;
    this.childNodes.forEach(function(child){
      if(child.tagName=="SORTING-OPTION"){
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

        //add correct icon
        this.children[i].shadowRoot.querySelector("#correct-icon").style.display = "flex";
        this.children[i].shadowRoot.querySelector("#incorrect-icon").style.display = "none";
      }else{
        this.children[i].removeAttribute("correct");
        this.children[i].setAttribute("incorrect",true);

        //add incorrect icon
        this.children[i].shadowRoot.querySelector("#incorrect-icon").style.display = "flex";
        this.children[i].shadowRoot.querySelector("#correct-icon").style.display = "none";

      }
      
    }
    this.numberCorrrect = numCorrect;
    if(this.celebrate){this.celebration(this.numberCorrrect,this.numberOfOptions);}
    if(this.shame){this.celebration(this.numberCorrrect,this.numberOfOptions);}
  }


  celebration(score, maximumScore){
    if(score==maximumScore){
      //play audio & disable button until audio play is over
      //if mute == false


      var audio = new Audio('./src/mp3/Celebration1.mp3');
      var duration;
      var button = this.shadowRoot.querySelector(".submit-button");


      if(this.mute){

        if(!this.noBackground){
          this.style.backgroundImage = "url(./src/gifs/confetti.gif)";
          setTimeout(()=>{
  
            this.style.backgroundImage = "none";
          },3000);
        }
       

        }else{
        //play audio
        if(this.noBackground){
          var el = this;
          //el.style.backgroundImage = "url(./src/gifs/confetti.gif)";
          audio.play();
          button.disabled = true;
          audio.onloadeddata = function(){
          duration = Number.parseInt(audio.duration);
          setTimeout(()=>{
          button.disabled = false;
          //el.style.backgroundImage = "none";
          },(duration * 1000));
          }

        }else{
          var el = this;
          el.style.backgroundImage = "url(./src/gifs/confetti.gif)";
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
    else{
      //else if shame = true play failure audio :)
      if(this.shame){
        //play audio & disable button until audio play is over
        


       var audio = new Audio('./src/mp3/wrong.mp3');
       var duration;
       var button = this.shadowRoot.querySelector(".submit-button");

       if(this.mute){
        if(!this.noBackground){
          this.style.backgroundImage = "url(./src/gifs/tomatoSplat.gif)";
        setTimeout(()=>{

          this.style.backgroundImage = "none";
        },3000);
        }
        
      }else{

        if(this.noBackground){
          var el = this;
      // el.style.backgroundImage = "url(./src/gifs/tomatoSplat.gif)";
      
       audio.play();
       button.disabled = true;
       audio.onloadeddata = function(){
         duration = Number.parseInt(audio.duration);
         setTimeout(()=>{
         button.disabled = false;
        // el.style.backgroundImage = "none";
         },(duration * 1000));
       }
        }else{

          var el = this;
          el.style.backgroundImage = "url(./src/gifs/tomatoSplat.gif)";
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
       //show confetti
       

      }
    }
  }



  reset(){
    let el = this;
    //spin animation
    let resetButton = this.shadowRoot.querySelector(".reset-button").firstChild;
    resetButton.animate([{transform : "rotate(360deg)"}],{duration: 500});
    //reset appearance of all options
    this.childNodes.forEach(function(child){
      if(child.tagName=="SORTING-OPTION"){
        child.shadowRoot.querySelector("#incorrect-icon").style.display = "none";
        child.shadowRoot.querySelector("#correct-icon").style.display = "none";
        child.removeAttribute("incorrect");
        child.removeAttribute("correct");
        if(el.dark===false){
          child.style.backgroundColor = "white";
        }
        else{
          child.style.backgroundColor = "lightGray";
        }
      }
    });
    this.numberCorrrect = 0;
    this.randomizeOptions();
  }




  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      ...super.properties,
      question: { type: String, reflect: true },
      correctOrder: {type: Array},
      numberOfOptions: {type: Number},
      numberCorrrect: {type: Number},
      celebrate: {type: Boolean},
      shame: {type: Boolean},
      dark: {type: Boolean},
      mute:{type: Boolean},
      disabled: {type: Boolean},
      noBackground: {type: Boolean, attribute: "no-background"}
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'need' && this[propName] === 'joy') {
        this.classList.add('joyful');
      }

      if(this.disabled){
        let el = this;
        var resetButton = this.shadowRoot.querySelector('.reset-button');
        var submitButton = this.shadowRoot.querySelector('.submit-button');
        resetButton.setAttribute('disabled',true);
        submitButton.setAttribute('disabled',true);
        this.childNodes.forEach(function(child){
          if(child.tagName=="SORTING-OPTION"){
            child.setAttribute("disabled",true);
            child.setAttribute("draggable",false);
            child.removeAttribute("correct");
            child.removeAttribute("incorrect");
            child.shadowRoot.querySelector("#incorrect-icon").style.display = "none";
            child.shadowRoot.querySelector("#correct-icon").style.display = "none";
            if(el.dark===false){
              child.style.backgroundColor = "white";
            }
            else{
              child.style.backgroundColor = "lightGray";
            }
            child.style.opacity = "0.5";
          }
        });
      }else{
        var resetButton = this.shadowRoot.querySelector('.reset-button');
        var submitButton = this.shadowRoot.querySelector('.submit-button');
        resetButton.removeAttribute('disabled');
        submitButton.removeAttribute('disabled');
        this.childNodes.forEach(function(child){
          if(child.tagName=="SORTING-OPTION"){
            child.removeAttribute('disabled');
            child.setAttribute("draggable",true);
            child.style.opacity = "1";
          }
        });
      }

    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
      
      if(this.disabled){
        var resetButton = this.shadowRoot.querySelector('.reset-button');
        var submitButton = this.shadowRoot.querySelector('.submit-button');
        resetButton.setAttribute('disabled',true);
        submitButton.setAttribute('disabled',true);
        this.childNodes.forEach(function(child){
          if(child.tagName=="SORTING-OPTION"){
            child.setAttribute("disabled",true);
            child.setAttribute("draggable",false);
            child.style.opacity = "0.5";
          }
        });
      }




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
        background-repeat: no-repeat;
        background-position: center;
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

      .button-container{
        display: flex;
        justify-content: center;
        align-items: center;

      }
      
      .reset-button{
        height: 20px;
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
        border-radius: 5px;
        padding: 9px;
        background-color: inherit;
        box-shadow: 1px 1px 1px 0px;
        cursor: pointer;
      }

      .reset-button:disabled {

        opacity: 0.5;

      

      }

      .reset-button img{
        height: inherit;
        width: inherit;
        padding: 1px;
      }



      :host([dark][disabled]) .submit-button{
          opacity: 0.5;
      }

    `;
  }

  //To Do: add reset option this resets the option color, the score, and randomizes the options

  // HTML - specific to Lit
  render() {
    //this.t.question = this.question;
    return html`
      <div class="slime-sorting-question-header">${this.t.question}</div>
      <div class="options"><slot></slot></div>
      <div class="slime-sorting-controls">
      <span>${this.t.numCorrectLeft} ${this.numberCorrrect}/${this.numberOfOptions} ${this.t.numCorrectRight}</span>
      <div class="button-container">
      ${this.dark ? html`<button @click="${this.reset}" class="reset-button"><img src="./src/images/resetDark.png" alt="reset button, click to restart"></img></button>`:
       html`<button  @click="${this.reset}" class="reset-button"><img src="./src/images/reset.png" alt="reset button, click to restart"></img></button>`}
      <button class="submit-button" @click="${this.checkOrder}"> ${this.t.submit} </button>
      </div>
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

window.customElements.define(SlimeSortingQuestion.tag, SlimeSortingQuestion);
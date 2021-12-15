import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../src/SlimeSortingQuestion.js';

export default {
  title: 'sime-sorting-question',
  component: 'sorting-question',
  argTypes: {
    question: { control: 'text', Reflect: true, description: "Question header"},
    dark: {control: "boolean", Reflect: true, description: "Element Dark Theme"},
    celebrate: {control: "boolean", Reflect: true,description: "Celebrate if 100% score"},
    shame: {control: "boolean", Reflect: true, description:"shame if less than 100% score"},
    mute: {control: "boolean", Reflect: true, description:"stops celebrate/shame audio from playing"},
    noBackground: {control: "boolean", Reflect: true, description:"stops background image from appearing on celebrate or shame"},
  },
};

function Template({ question = 'Sort The Following In Order', dark = false, celebrate = false, shame = false, mute = false, noBackground = false }) {

  return html` <sorting-question 
  question="${question}" 
  dark=${ifDefined(dark ? html`` : undefined)} 
  celebrate=${ifDefined(celebrate ? html`` : undefined)}'
  shame=${ifDefined(shame ? html`` : undefined)}
  mute=${ifDefined(mute ? html`` : undefined)}
  no-background=${ifDefined(noBackground ? html`` : undefined)}
  
  >
  
  <sorting-option>1</sorting-option>
  <sorting-option>2</sorting-option>
  <sorting-option>3</sorting-option>

  </sorting-question> `;

}

export const SortingQuestion = Template.bind({});

/*


export const sortingOption = Template.bind({});
sortingOption.args = {
  need: 'science',
  slot: html`<sorting-option></sorting-option>`,
};

*/

import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/SlimeSortingQuestion.js';

describe('sorting-question', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
    <sorting-question dark>
    <sorting-option></sorting-option>
    </sorting-question>`);
  });

  it('slotted content is there and dark attribute passed down', () => {
    const option = element.childNodes[1];
    console.log("\n\n\n\n\n\n");
    console.log(option);
    expect(option).to.have.attribute('dark');
  });

  
  //not a good test of my element, options themselves not meant to be tab-able
 // it('passes the a11y audit', async () => {
   // await expect(element).shadowDom.shadowDom.to.be.accessible();
  //});

});

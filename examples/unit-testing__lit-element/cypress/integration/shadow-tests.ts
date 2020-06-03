/// <reference types="cypress" />

describe('element-one', () => {
  it('should render a button', () => {
    cy
      .get('element-one')
      .shadow()
      .find('button')
      .should('exist');
  });

  it('should render a message on button click', () => {
    cy
      .get('element-one')
      .shadow()
      .find('button')
      .click()
    cy
      .get('element-one')
      .shadow()
      .find('p')
      .then((node) => {
        expect(node.text()).to.equal('I am element 1!');
      });
  });
});

describe('element-two', () => {
  it('should render a default slot', () => {
    cy
      .get('element-two')
      .find('.container > slot', {ignoreShadowBoundaries: true})
      .then((slot) => {
        expect(slot.assignedNodes()[0]).to.equal(cy.$$('element-two > p')[0]);
      });
  });
});

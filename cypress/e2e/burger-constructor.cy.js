/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable cypress/unsafe-to-chain-command */

import { testURL } from '../../src/utils/constants';
import { email, password } from '../../src/utils/auth-test-data';

describe('make order', function () {
  before(() => {
    cy.visit(testURL);
    cy.viewport(1474, 762);
  });

  it('should drag ingredients', () => {
    cy.visit(`${testURL}login`);
    cy.get('[type=email]').type(email);
    cy.get('[type=password]').type(password);
    cy.get('button').click();

    cy.get('[data-testid=ingredient_card]').first().trigger('dragstart').trigger('dragleave');
    cy.get('[data-testid=constructor_drag_destination]')
      .trigger('dragenter')
      .trigger('dragover')
      .trigger('drop')
      .trigger('dragend');

    cy.get('[data-testid=ingredient_card]').eq(3).trigger('dragstart').trigger('dragleave');
    cy.get('[data-testid=constructor_drag_destination]')
      .trigger('dragenter')
      .trigger('dragover')
      .trigger('drop')
      .trigger('dragend');

    cy.get('button').click();

    cy.wait(16000);
    cy.get('[data-testid=modal_header]').click();
  });
});

describe('ingredient modal', function () {
  before(() => {
    cy.visit(testURL);
    cy.viewport(1474, 762);
  });

  it('should open and close ingredient modal', () => {
    cy.get('[data-testid=ingredient_card]').first().click();
    cy.get('[data-testid=modal_header]').click();
  });
});

import { ComponentsPage } from '../page/components';
import { getTranslation } from '../support/utils';

const componentsPage = new ComponentsPage();
const text = getTranslation();

Cypress.Commands.add('login', (email = 'thatswhatudobaby@gmail.com', password = 'Silneheslo123') => {
  cy.visit('/');
  cy.selectMenu(text.menu.login);

  cy.url().then(url => {
    componentsPage.buttonText(text.auth.signInExist).click();
    componentsPage.inputPlaceholder(text.auth.email).type(email);
    componentsPage.inputPlaceholder(text.auth.password).type(password + '{enter}');
    cy.url().should('not.eq', url);
  });
});

Cypress.Commands.add('selectMenu', (option) => {
  cy.url().then(url => {
    componentsPage.buttonText(option).click();
    cy.url().should('not.eq', url);
  });
});
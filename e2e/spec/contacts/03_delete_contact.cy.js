import { ComponentsPage } from "../../page/components";
import { getTranslation } from "../../support/utils";

const componentsPage = new ComponentsPage();
const text = getTranslation();

describe('Contact page', () => {
  beforeEach( () => {
    cy.login();
    cy.selectMenu(text.menu.contacts);
  });

  it('Delete contact', () => {
    componentsPage.tableDelete().click({force: true});
    componentsPage.buttonText(text.contacts.button.delete).click();
    componentsPage.buttonText(text.contacts.button.delete).should('not.exist');
  });

  it('Check contact', () => {
    componentsPage.table().should('not.exist');
  });
});
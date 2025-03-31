import { ComponentsPage } from "../../page/components";
import { getTestData, getTranslation } from "../../support/utils";

const componentsPage = new ComponentsPage();
const data = getTestData('contacts');
const text = getTranslation();

describe('Contact page', () => {
  beforeEach( () => {
    cy.login();
    cy.selectMenu(text.menu.contacts);
  });

  it('Create contact', () => {
    componentsPage.buttonText(text.contacts.button.new).click();

    componentsPage.inputText(text.contacts.ico).should('be.enabled').type(data.ico + '{enter}');
    componentsPage.inputText(text.contacts.name).should('have.value', data.name);
    componentsPage.buttonText(text.contacts.button.save).click();
    componentsPage.tableColumn().eq(0).should('contain', data.name);
  });

  it('Check contact', () => {
    componentsPage.tableEdit().click({force: true});

    componentsPage.inputText(text.contacts.name).should('have.value', data.name);
    componentsPage.inputText(text.contacts.ico).should('have.value', data.ico);
    componentsPage.inputText(text.contacts.dic).should('have.value', data.dic);
    componentsPage.inputText(text.contacts.email).should('have.value', data.email);
    componentsPage.inputText(text.contacts.website).should('have.value', data.website);
    componentsPage.inputText(text.contacts.address.street).should('have.value', data.address.street);
    componentsPage.inputText(text.contacts.address.city).should('have.value', data.address.city);
    componentsPage.inputText(text.contacts.address.zip).should('have.value', data.address.zip);
    componentsPage.inputText(text.contacts.address.country).should('have.value', data.address.country);

    componentsPage.buttonText(text.contacts.button.save).click();

    componentsPage.tableColumn().eq(0).should('contain', data.name);
    componentsPage.tableColumn().eq(1).should('contain', data.ico);
    componentsPage.tableColumn().eq(2).should('contain', data.email);
  });
});
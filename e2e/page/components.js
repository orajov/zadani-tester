import { getTranslation } from "../support/utils";

const text = getTranslation();

export class ComponentsPage {

    inputText(text) {
        return cy.contains('label', text).parent().find('input');
    }

    inputPlaceholder(text) {
        return cy.get(`input[placeholder="${text}"]`);
    }

    buttonText(text) {
        return cy.contains('button', text);
    }

    linkText(text) {
        return cy.contains('a', text)
    }

    checkboxText(text) {
        return cy.contains('input[type="checkbox"]', text);
    }

    menu() {
        return cy.get('.nav').find('ul');
    }

    menuMobile() {
        return cy.contains('button', text.menu.mobile);
    }

    optionMenu(text) {
        return this.menu().buttonText(text);
    }

    table() {
        return cy.get('tbody');
    }

    tableRow() {	
        return this.table().find('tr');
    }

    tableColumn(row = 0) {
        return this.tableRow().eq(row).find('td');
    }

    tableInvoice(row = 0) {
        return this.tableColumn(row).find('button').eq(0);
    }

    tableExpense(row = 0) {
        return this.tableColumn(row).find('button').eq(1);
    }

    tableEdit(row = 0) {
        return this.tableColumn(row).find('button').eq(2);
    }

    tableDelete(row = 0) {
        return this.tableColumn(row).find('button').eq(3);
    }

}
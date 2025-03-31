import './commands';

const resolution = Cypress.env('CYPRESS_RESOLUTION');   // změna rozlišení skrze ENV
const baseUrl = Cypress.env('CYPRESS_URL');   // změna prostředí skrze ENV

before(() => {
    if(baseUrl) Cypress.config('baseUrl', baseUrl);
});

beforeEach( () => {
    if(resolution) cy.viewport(resolution);

    cy.window().then( win => {
        const isMobile = win.innerWidth <= 768;
        Cypress.config('mobileResolution', isMobile);
        cy.log('Mobile resolution = ' + true);
    });
});
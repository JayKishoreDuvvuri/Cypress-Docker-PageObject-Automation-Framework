Cypress.Commands.add('openHomePage', () => {
	cy.visit('/');
});

Cypress.Commands.add('isVisible', selector => {
	cy.get(selector).should('be.visible');
});

Cypress.Commands.add('isDisplayed', selector => {
	cy.xpath(selector).should('be.visible');
});

Cypress.Commands.add('isPresent', selector => {
	cy.get(selector).should('exist');
});

Cypress.Commands.add('isNotPresent', selector => {
	cy.get(selector).should('not.exist');
});

Cypress.Commands.add('isEnabled', selector => {
	cy.get(selector).should('not.be.disabled');
});

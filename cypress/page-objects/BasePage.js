import { homePageImage, landingPageTitle } from '../utils/locators';

export default class BasePage {
	static openApp() {
		return cy.openHomePage();
	}

	static pause(timeout) {
		return cy.wait(timeout);
	}

	static verifyTitle() {
		return cy.title().should('eq', landingPageTitle);
	}

	static verifyUrl() {
		return cy.url().should('include', '/index.php');
	}

	static verifyForPageToLoad() {
		return cy.get(homePageImage).should('be.visible');
	}

	static contactLink() {
		return cy.get('a').contains('Contact us').should('be.visible');
	}

	static loginLink() {
		return cy.get('a').contains('Sign in').should('be.visible');
	}
}

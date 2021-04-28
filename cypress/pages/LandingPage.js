import BasePage from '../pages/BasePage';
import { printedDressTwo, printedSummerDressTwo } from '../selectors/locators';

export default class LandingPage extends BasePage {
	static fadedShortSleeveTshirts() {
		return cy
			.get('a')
			.contains('Faded Short Sleeve T-shirts')
			.should('be.visible');
	}

	static blouse() {
		return cy.get('a.product-name').contains('Blouse').should('be.visible');
	}

	static printedDress() {
		return cy.get('a').contains('Printed Dress').should('be.visible');
	}

	static printedDressTwo() {
		return cy
			.get(printedDressTwo)
			.contains('Printed Dress')
			.should('be.visible');
	}
	static printedSummerDress() {
		return cy.get('a').contains('Printed Summer Dress').should('be.visible');
	}
	static printedSummerDressTwo() {
		return cy
			.get(printedSummerDressTwo)
			.contains('Printed Summer Dress')
			.should('be.visible');
	}
	static printedChiffonDress() {
		return cy.get('a').contains('Printed Chiffon Dress').should('be.visible');
	}
}

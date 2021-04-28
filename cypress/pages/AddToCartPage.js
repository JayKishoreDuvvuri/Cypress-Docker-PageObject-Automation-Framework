import BasePage from '../pages/BasePage';
import {
	addToCartButton,
	successMessage,
	cartAddedMessage,
	closeBtn,
	itemCount,
	productCount,
} from '../selectors/locators';

export default class AddtoCartPage extends BasePage {
	static clickChiffonDress() {
		return cy.get('a').contains('Printed Chiffon Dress').click();
	}
	static clickAddToCart() {
		cy.get(addToCartButton).should('be.enabled');
		cy.get(addToCartButton).click({ force: true });
		return cy.get(addToCartButton).click();
	}
	static cartSuccessMessage() {
		return cy.get(successMessage).should('be.visible');
	}

	static cartAddedMessage() {
		return cy.get(cartAddedMessage).should('be.visible');
	}

	static cartCount() {
		cy.get(closeBtn).click();
		cy.get(itemCount)
			.invoke('text')
			.should(textValue => {
				expect(productCount).to.eq(textValue);
			});
	}
}

import AddtoCartPage from '../page-objects/AddToCartPage';
import {
	colourSelected,
	colourBlack,
	colourOrange,
	colourBlue,
	colourYellow,
	imagePicture,
	homePageImage,
	landingPageTitle,
	quantityWanted,
	numberOfItems,
	checkout,
	productPrice,
	totalProductPrice,
} from '../utils/locators';

export default class ProductPage extends AddtoCartPage {
	static printedSummerDress() {
		cy.get('a').contains('Printed Summer Dress').should('be.visible');
		return cy.get('a').contains('Printed Summer Dress').click();
	}

	static verifyTitle() {
		return cy.get('h1').contains('Printed Summer Dress').should('be.visible');
	}

	static blackColour() {
		cy.get(colourBlack).click();
		return cy.get(colourBlack).should('have.class', 'color_pick selected');
	}

	static blackColourImageUpdated() {
		return cy.get(imagePicture)
			.should('be.visible')
			.and(
				'have.attr',
				'src',
				'http://automationpractice.com/img/p/1/5/15-large_default.jpg'
			);
	}

	static orangeColour() {
		cy.get(colourOrange).click();
		return cy.get(colourOrange).should('have.class', 'color_pick selected');
	}

	static orangeColourImageUpdated() {
		return cy.get(imagePicture)
			.should('be.visible')
			.and(
				'have.attr',
				'src',
				'http://automationpractice.com/img/p/1/4/14-large_default.jpg'
			);
	}

	static blueColour() {
		cy.get(colourBlue).click();
		return cy.get(colourBlue).should('have.class', 'color_pick selected');
	}

	static blueColourImageUpdated() {
		return cy.get(imagePicture)
			.should('be.visible')
			.and(
				'have.attr',
				'src',
				'http://automationpractice.com/img/p/1/3/13-large_default.jpg'
			);
	}

	static yellowColour() {
		cy.get(colourYellow).click();
		return cy.get(colourYellow).should('have.class', 'color_pick selected');
	}

	static yellowColourImageUpdated() {
		return cy.get(imagePicture)
			.should('be.visible')
			.and(
				'have.attr',
				'src',
				'http://automationpractice.com/img/p/1/2/12-large_default.jpg'
			);
	}

	static colourSelected() {
		return cy.get(colourSelected).should('have.class', 'selected');
	}

	static navigateToHomePage() {
		cy.get(homePageImage).click();
		return cy.title().should('eq', landingPageTitle);
	}

	static addQuantity() {
		cy.get(quantityWanted).clear();
		cy.get(quantityWanted).type(numberOfItems);
		AddtoCartPage.clickAddToCart();
		AddtoCartPage.cartSuccessMessage();
		AddtoCartPage.cartAddedMessage();
		return cy.get(checkout).click();
	}

	static verifyTotalPrice() {
		return cy.get(productPrice)
			.invoke('text')
			.should(textValue => {
				expect(totalProductPrice).to.eq(textValue);
			});
	}
}

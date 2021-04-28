import LandingPage from '.././pages/LandingPage';
import AddToCartPage from '.././pages/AddToCartPage';

// ### 1. Launch the Application
// ### 2. Select the Product
// ### 3. Add to Cart
// ### 4. Verify the message displayed that the product is added to Cart
// ### 5. Check the Product Count of the Cart

describe('Add to Cart', () => {
	before(function () {
		LandingPage.openApp();
	});

	it('Check the title, url and links on the Landing Page', () => {
		LandingPage.verifyTitle();
		LandingPage.verifyUrl();
		LandingPage.verifyForPageToLoad();
		LandingPage.contactLink();
		LandingPage.loginLink();
	});

	it('click on 20% discount listed Item', () => {
		LandingPage.printedChiffonDress();
		AddToCartPage.clickChiffonDress();
	});

	it('Check whether the Add to Cart Button is enabled and click product to add to Cart', () => {
		AddToCartPage.clickAddToCart();
	});

	it('Verify whether the product added to Cart message is displayed', () => {
		AddToCartPage.cartSuccessMessage();
		AddToCartPage.cartAddedMessage();
	});

	it('Verify the product count from the Cart', () => {
		AddToCartPage.cartCount();
	});
});

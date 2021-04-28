import LandingPage from '.././pages/LandingPage';
import ProductPage from '.././pages/ProductPage';

// ### 1. Launch the Application
// ### 2. Click on the 5th Product with 5% discount from the list
// ### 3. Add quantity as 5 items to the Cart
// ### 4. Check the Total Price of the products selected

describe('Add the product quantity as five to the cart and check the total price', () => {
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

	it('Click on the 5th Product with 5% discount on the Landing Page', () => {
		ProductPage.printedSummerDress();
		ProductPage.verifyTitle();
	});

	it('Add quantity as 5 for the product', () => {
		ProductPage.addQuantity();
	});

	it('Check whether the Total price is accurate from the Cart', () => {
		ProductPage.verifyTotalPrice();
	});
});

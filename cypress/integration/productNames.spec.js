import LandingPage from '.././page-objects/LandingPage';

// ### 1. Launch the Application
// ### 2. Arrive on the Landing Page
// ### 3. Verify the product names are visible
// ### 4. Print the Name of Products in to the Test Reort

describe('Check Product Names Visible and Print it to Test Report', () => {
	before(function () {
		LandingPage.openApp();
		LandingPage.pause(3000);
	});

	it('Check the title, url and links on the Landing Page', () => {
		LandingPage.verifyTitle();
		LandingPage.verifyUrl();
		LandingPage.verifyForPageToLoad();
		LandingPage.contactLink();
		LandingPage.loginLink();
	});

	it('Check the product name: Faded Short Sleeve T-shirts is visible', () => {
		LandingPage.fadedShortSleeveTshirts();
	});

	it('Check the product name: Blouse is visible', () => {
		LandingPage.blouse();
	});

	it('Check the product name: Printed Dress is visible', () => {
		LandingPage.printedDress();
	});

	it('Check the product name: Printed Dress Two is visible', () => {
		LandingPage.printedDressTwo();
	});

	it('Check the product name: Printed Summer Dress is visible', () => {
		LandingPage.printedSummerDress();
	});

	it('Check the product name: Printed Summer Dress Two is visible', () => {
		LandingPage.printedSummerDressTwo();
	});

	it('Check the product name: Printed Chiffon Dress is visible', () => {
		LandingPage.printedChiffonDress();
	});
});

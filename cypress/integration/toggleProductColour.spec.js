import LandingPage from '.././page-objects/LandingPage';
import ProductPage from '.././page-objects/ProductPage';

// ### 1. Launch the Application
// ### 2. Click on the 5th Product with 5% discount from the list
// ### 3. Toggle between the Colours for this selected product
// ### 4. Verify the image is updated when selecting different colours
// ### 5. Click the Logo at the top and Navigate to Landing Page

describe('Toggle between the colours of the Product', () => {
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

	it('Check when selecting black colour the image is updated', () => {
		ProductPage.blackColour();
		ProductPage.colourSelected();
		ProductPage.blackColourImageUpdated();
	});

	it('Check when selecting orange colour the image is updated', () => {
		ProductPage.orangeColour();
		ProductPage.colourSelected();
		ProductPage.orangeColourImageUpdated();
	});

	it('Check when selecting blue colour the image is updated', () => {
		ProductPage.blueColour();
		ProductPage.colourSelected();
		ProductPage.blueColourImageUpdated();
	});

	it('Check when selecting yellow colour the image is updated', () => {
		ProductPage.yellowColour();
		ProductPage.colourSelected();
		ProductPage.yellowColourImageUpdated();
	});

	it('Navigate to Landing Page', () => {
		ProductPage.navigateToHomePage();
	});
});

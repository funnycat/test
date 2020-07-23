jQuery(document).ready(function() {

		const preorderProducts = ['blue-silk-tuxedo'];
		const path = window.location.pathname;
	    // The pathname most likely looks like /collections/something/products/product-handle
	    const potentialHandle = path.substring(path.lastIndexOf("/") + 1);
		console.log(potentialHandle);

		if(preorderProducts.includes(potentialHandle)){
			$('.product-form__item--payment-button').prepend('<div class="product-form__item product-form__item--submit product-form__item--payment-button"><button type="submit" class="shopify-payment-button" style="display: block; width: 100%; font-size: 16px; font-family: font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; line-height: 1.4; padding: 8px; margin-top: 0; margin-bottom: 10px; min-height: 44px; background-color: #000; color: #3a3a3a; border-color: #3a3a3a;" data-testid="Checkout-button">Preorder Now</button></div>')
			console.log('Button Added!');
		}else{
			console.log('Product not a preorder!');
		}
});


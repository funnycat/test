jQuery(document).ready(function() {

//		$.get("https://valette.wm.r.appspot.com/api/product/blue-silk-tuxedo/preorder_settings/")
//		  .done(function( data ) {
//		    alert( "Data Loaded: " + data );
//		  });

		//const productHandle = 'blue-silk-tuxedo/preorder_settings/'
		$.get('/apps/valette/product/blue-silk-tuxedo/preorder_settings/')
		  .done(function( data ) {
		    alert( "Data Loaded: " + data );
		  });


/*		  $.ajax({
		    url: "https://valette.wm.r.appspot.com/api/product/blue-silk-tuxedo/preorder_settings/",
//		    beforeSend: function(xhr) { 
//		      xhr.setRequestHeader("Authorization", "Basic " + btoa("username:password")); 
//		    },
		    type: 'GET',
		    dataType: 'json',
		    contentType: 'application/json',
		    success: function (data) {
		      alert(JSON.stringify(data));
		    },
		    error: function(){
		      alert("Cannot get data");
		    }
		});*/

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


jQuery(document).ready(function() {

		const path = window.location.pathname;
	    // The pathname most likely looks like /collections/something/products/product-handle
	    const productHandle = path.substring(path.lastIndexOf("/") + 1);
		console.log(productHandle);
		
		const requestPath = "/apps/valette/product/"+productHandle+"/preorder_settings/"

		$.get(requestPath)
		  .done(function( data ) {

			var stringified = JSON.stringify(data);
		    var preorderDetails = JSON.parse(stringified);
		    console.log( "Data Loaded: " + stringified );

		    const parentDivClasses = 'product-form__item product-form__item--submit product-form__item--payment-button';
		    const buttonStyle = 'display: block; width: 100%; font-size: 16px; font-family: font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; line-height: 1.4; padding: 8px; margin-top: 10px; margin-bottom: 10px; min-height: 44px; background-color: #000; color: #3a3a3a; border-color: #3a3a3a;';
		    const buttonClass = 'shopify-payment-button';
		    const message = '<p>'+preorderDetails.messageText+'</p>'

//		    $('.product-form__item--payment-button').prepend('<div class="'+parentDivClasses+'"><button type="submit" class="'+buttonClass+'" style="'+buttonStyle+'" data-testid="Checkout-button">'+preorderDetails.buttonText+'</button>'+message+'</div>')
			
			$('.product-form__item--payment-button').hide();

			if(preorderDetails.goalReached){
				$('.product-form__controls-group--submit').prepend('<div class="'+parentDivClasses+'"><button type="submit" class="'+buttonClass+'" style="'+buttonStyle+'" data-testid="Checkout-button" disabled>'+preorderDetails.disabledButtonText+'</button></div>')	
	
			}else{
				$('.product-form__controls-group--submit').prepend('<div class="'+parentDivClasses+'"><button type="submit" class="'+buttonClass+'" style="'+buttonStyle+'" data-testid="Checkout-button">'+preorderDetails.buttonText+'</button>'+message+'</div>')	
			}
		

			console.log('Button Added!');

		  }).fail(function(){ 
			  // Handle error here
			  console.log("Not a preorder");
		});

});


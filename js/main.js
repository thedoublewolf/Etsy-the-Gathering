(function () {

  var templateString = $('#itemListing').text();

  var renderTemplate = _.template(templateString);

  _.each(items.results, function (item){
  	 var itemHTML = renderTemplate(item);
  	$('.magicStuff').append(itemHTML);
	});

	$('.magicItem').each( function (){
		$('.magicItem').mouseenter( function (){
			$('#heart').removeClass('heartHidden').addClass('heartShown');
			$('#hamburger').removeClass('hamburgerHidden').addClass('hamburgerShown');
		});
	});

	// $('.magicItem').each( function (){
	// 	$('.magicItem').mouseover( function (){
	// 		$('#heart').removeClass('heartShown').addClass('heartHidden');
	// 		$('#hamburger').removeClass('hamburgerShown').addClass('hamburgerHidden');
	// 	});
	// });

}());
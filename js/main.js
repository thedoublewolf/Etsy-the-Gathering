(function () {
	// Grab the template string
  var templateString = $('#itemListing').text();
  // Turn it into a template function
  var renderTemplate = _.template(templateString);
  // For each item, return value as strings
  // Append strings to #itemListing Script tag 
  _.each(items.results, function (item){
  	 var itemHTML = renderTemplate(item);
  	$('.magicStuff').append(itemHTML);
	});


  // On each item on mouseover, find the descendant and remove/add class
  $('.magicItem').mouseover( '.heartHam', function (event){
  	console.log(event);
  	$(this).find('#heart').removeClass('heartHidden').addClass('heartShown');
  	$(this).find('#hamburger').removeClass('hamburgerHidden').addClass('hamburgerShown');
  });
  // On each item on mouseout, find the descendant and add/remove class
  $('.magicItem').mouseout( '.heartHam', function (event){
  	console.log(event);
  	$(this).find('#heart').addClass('heartHidden').removeClass('heartShown');
  	$(this).find('#hamburger').addClass('hamburgerHidden').removeClass('hamburgerShown');
  });

}());
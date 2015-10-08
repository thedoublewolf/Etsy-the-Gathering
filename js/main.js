(function () {

  var templateString = $('#itemListing').text();

  var renderTemplate = _.template(templateString);

  _.each(items.results, function (item){
  	 var itemHTML = renderTemplate(item);
  	$('.magicStuff').append(itemHTML);
	});

}());
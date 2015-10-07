(function () {

  var firstItem = items.results[0];

  var templateString = $('itemTemplate').text();

  var templateFunction = _.template(templateString);

  _.each(items.results, function (item){
  	 var itemHTML = templateFunction(item);
  	$('.magicStuff').append(itemHTML);
	});

}());

var gardenController = (function() {


var initGallery = function(jsonResponseUrl) {


	var Plant = function(name, picture, price, planterColor) {
		this.name = name;
		this.picture = picture;
		this.price = price;
		this.planterColor = planterColor;
	};

	var plant1 = new Plant('Ironwood Succulent Planter', '1', 15, 'medium');
	var plant2 = new Plant('Marblewood Succulent Planter', '2', 15, 'light');
	var plant3 = new Plant('African Padauk Succulent Planter', '3', 15, 'medium');






	var allPlants = JSON.parse(xhttp.responstText); //allPlants is the database (java)
	var galleryContent = [];
	var plants;

	for (var i = 0; i < allPlants.length; i++) {
		plants = allPlants[i];

		galleryContent[i] = setGallery(plant);
	}


	function setGallery(plant) {
		var filterNames = "";
		for (var j = 0; j < plant.filters.length; j++) {
			filterNames += plant.filters[j].displayName
		};
	}

	/*
	function setGallery(plant) {
		for (var j = 0; j < plant.length; j++) {
			if (this.price === 15 && ".filter-checked")
		}
	} */



}











$('button[name="generatePlantsByFilter"]').on('click', function() {

		var selectedFilters = [];

		$(".filter:checked").each(function() {
			selectedFilters.push(this.name);
		});

		initGallery(selectedFilters);

});









})();





var UIController = (function() {

	var DOMStrings = {

	};




})();







var controller = (function(gardenCtrl, UICtrl) {

	var setupEventListeners = function() {

		var DOMstrings = UICtrl.getDOMstrings();


		document.querySelector(DOMstrings.).addEventListener('click', )

		document.addEventListener('keypress', function(event) {
			if (event.keycode === 13 || event.which === 13) {
				//do something
			}
		});

	}


	return {
		init: function() {
			console.log('app started.');
			UICtrl.displayGallery();
			setupEventListeners();
		}
	};


})(gardenController, UIController);

controller.intit();








	// when a filter is clicked on:
	document.querySelector('.generatePlantsByFilter').addEventListener('click', function() {

		for


		var galleryDOM = document.querySelector('.plant');
			galleryDOM.src = 'images/plant' + this.picture + '.jpg';

		var galleryDOM = document.querySelector('.price');
			galleryDOM.src = 'price: $' + this.price;

	});







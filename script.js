
var gardenController = (function() {

	var Plant = function(name, picture, price, planterColor) {
		this.name = name;
		this.picture = picture;
		this.price = price;
		this.planterColor = planterColor;
	};

var plant1 = new Plant('Ironwood Succulent Planter', '1', '$15', 'medium');
var plant2 = new Plant('Marblewood Succulent Planter', '2', '$15', 'light');
var plant3 = new Plant('African Padauk Succulent Planter', '3', '$15', 'medium');


})();





var UIController = (function() {

	var DOMStrings = {

	};


})();




var controller = (function(gardenCtrl, UICtrl) {

})(gardenController, UIController);

controller.intit();



// when a filter is clicked on:
document.querySelector('.filter').addEventListener('click', function() {

	for


	var galleryDOM = document.querySelector('.plant');
		galleryDOM.src = 'images/plant' + this.picture + '.jpg';

});







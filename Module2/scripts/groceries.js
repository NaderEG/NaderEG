	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.25
	},
	{
		name: "yogurt",
		vegetarian: true,
		glutenFree: false,
		price: 0.75
	},
	{
		name: "cheese",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.75
	},
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.00
	},
	{
		name: "lettuce",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.15
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 15.00
	},
	{
		name: "macaroni",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 30.00
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts() {

	let product_names = [];

	for (let i=0; i<products.length; i+=1) {
		if ((document.getElementById("veg").checked) && (products[i].vegetarian == false)){
			continue;
		}
		else if ((document.getElementById("gluFree").checked) && (products[i].glutenFree == false)){
			continue;
		}
		else if ((document.getElementById("org").checked) && (products[i].organic == false)){
			continue;
		}
		else{
			product_names.push({name: products[i].name, price: products[i].price});
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

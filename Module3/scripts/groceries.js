
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 
/*images references
* http://veikals.datorpasaule.lv/lv/veikals
* https://www.mbl.is/matur/frettir/2019/10/07/bestu_radin_til_ad_halda_graenmetinu_fersku/
* https://healthynibblesandbits.com/page/7/?wref=bif
* https://the-fresh-market-whakatane.mybigcommerce.com/broccoli/
* https://www.camperspantry.com.au/products/mixed-berry-yoghurt-powder-camping-food-hiking-food?pr_prod_strat=copurchase&pr_rec_pid=1342692982869&pr_ref_pid=2562987753557&pr_seq=uniform
* https://in.pinterest.com/pin/163818505179889641/
* https://www.eatthis.com/mac-and-cheese/
* https://www.pinterest.ca/pin/291467407127662868/
* https://ncultura.pt/10-erros-comuns-ao-cozinhar-um-bife/
* https://www.yummly.com/recipes/homemade-yogurt-without-powdered-milk
* */
var products = [
	{
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.25,
		image: "MEDIA/banana",
		type: "fruitProduct"
	},
	{
		name: "yogurt",
		vegetarian: true,
		glutenFree: false,
		price: 0.75,
		image: "MEDIA/yogurt",
		type: "dairyProduct"
	},
	{
		name: "cheese",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.75,
		image: "MEDIA/cheese",
		type: "dairyProduct"
	},
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		image: "MEDIA/broccoli",
		type: "vegetableProduct"
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.00,
		image: "MEDIA/apple",
		type: "fruitProduct"
	},
	{
		name: "lettuce",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.15,
		image: "MEDIA/lettuce",
		type: "vegetableProduct"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		image: "MEDIA/bread",
		type: "grainProduct"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00,
		image: "MEDIA/salmon",
		type: "meatProduct"
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 15.00,
		image: "MEDIA/steak",
		type: "meatProduct"
	},
	{
		name: "macaroni",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 30.00,
		image: "MEDIA/macaroni",
		type: "grainProduct"
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
			product_names.push({name: products[i].name, price: products[i].price, type: products[i].type});
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

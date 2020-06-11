
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
//I understand there is an error in this function that after displaying the information the page refreshes. Apart from this error the functionality works,
//however I do not know the resolution to the error
function openInfo(typeName) {

	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(typeName).style.display = "block";

	evt.currentTarget.className += " active";
}



// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices() {
	// obtain a reduced list of products based on restrictions
	let optionArray = restrictListProducts();

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

	for (i = 0; i < optionArray.length; i++) {

		let productName = optionArray[i].name.toString();
		let productPrice = optionArray[i].price;
		let s2 = document.getElementById(optionArray[i].type);
		s2.innerHTML = "";
		let toPrint = productName+"   $"+productPrice;
		// create the checkbox and add in HTML DOM
		let checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		let label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(toPrint));
		let image = document.createElement("IMG");
		image.setAttribute("src", "MEDIA/"+productName+".jpg");
		image.setAttribute("width", "50");
		image.setAttribute("height", "50");
		image.setAttribute("alt", productName);
		s2.appendChild(image);
		s2.appendChild(label);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

	let ele = document.getElementsByName("product");
	let chosenProducts = [];

	let c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	let para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));

}


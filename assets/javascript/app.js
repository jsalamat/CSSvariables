// Use Javascript to update the CSS Variables by Selecting the inputs

// This is going to select all the inputs in the page

const inputs = document.querySelectorAll('.controls input');
// This will return a node list and in it we want to loop the forEach method 
// that was recently added to node list
function handleUpdate() {
	//console.log(this.value);
	// To get the value out of this by getting the suffix
	// this reason there is a data-sizing which is a data attribute
	// prefix "data-PLACEsuffixvalue" ex data-sizing="px"
	// dataset is the object that will contain all the data attribute from specifix element
	//console.log(this.dataset);
	// data- select everything from that element and put into an object
	const suffix = this.dataset.sizing || '';
	// for some that dont have sizing we put or nothing to avoid append undefine at the end
	console.log(suffix);
	// select and update a variable by selecting entire document by root
	// and set property of base spacing and blur the reason div use name=""
	console.log(this.name);
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	// to set the property of --base, --spacing, -- blur, but these are variables instead
	// used backticks to plop the variable name in and set to this value
	// problem there is no pixel append at the end
	// this reason suffix variable created to append px at the end
	// this help update any css variables in this element 

}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
// listen for a change event on each of the inputs
// loop over the forEach input, addEventListener to listen
// for the change in the event
// and when its called its going to handleUpdate
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
// listen to for a mousemove when move the value to trigger a change
// Use Javascript to update the CSS Variables by Selecting the inputs

// This is going to select all the inputs in the page

const inputs = document.querySelectorAll('.controls input');
// This will return a node list and in it we want to loop the forEach method 
// that was recently added to node list
function handleUpdate() {
	console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
// listen for a change event on each of the inputs
// loop over the forEach input, addEventListener to listen
// for the change in the event
// and when its called its going to handleUpdate

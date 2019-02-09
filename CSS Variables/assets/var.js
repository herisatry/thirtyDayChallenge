const inputs = document.querySelectorAll('.controls input'); //gives back a nodelist.


function handleUpdate() {

    //we need the suffix of the variable to use it and update.
    //we will use a data attribute
    const suffix = this.dataset.sizing || '';

    //we will now select the entire document :root and set a property

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
// Get the checkbox input element
const checkbox = document.querySelector('input[name="checked"]');


const yearlySub = document.querySelectorAll('.yearly');
const monthlySub = document.querySelectorAll(".monthly");

// Add an event listener to the checkbox input
checkbox.addEventListener('change', () => {
    // Loop through each item in the NodeList
    yearlySub.forEach(yearlySub => {
        // If the checkbox input is checked, remove the "yearly" class from the price element
        if (checkbox.checked) {
            yearlySub.style.display = "block";
        }
        // Otherwise, add the "yearly" class back to the price element
        else {
            yearlySub.style.display = "none";

        }
    });

    monthlySub.forEach(monthlySub => {
        // If the checkbox input is checked, remove the "yearly" class from the price element
        if (checkbox.checked) {
            monthlySub.style.display = "none";
        }
        // Otherwise, add the "yearly" class back to the price element
        else {
            monthlySub.style.display = "block";

        }
    });

});
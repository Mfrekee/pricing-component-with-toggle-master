 // Get the checkbox input element
 const checkbox = document.querySelector('input[name="checked"]');


 const yearlySub = document.querySelectorAll('.yearly');
 const monthlySub = document.querySelectorAll(".monthly");

 // Add a click event listener to each of the subscription types
 //yearlySub.forEach(sub => {
    //sub.addEventListener("click", ()=>{
        // if (checkbox.checked) {
        //     // If the user has checked the box, add the class 'selected' to whichever
        //     // subscription type they clicked on and remove it from any other that may have it
        //     yearlySub.forEach(s => s.classList.remove('selected'));
        //     sub.classList.add('selected');
        //     } else {
        //         // If the user hasn't checked the box, do nothing
        //         return;
        //         };
        //         });
        //         });
        //         // When the form is submitted...
        //         document.getElementById("subscribe").addEventListener("submit", function(event){
        //             // ... prevent the default submission action
        //             event.preventDefault();
        //             // Check which subscription type was selected
        //             let selection = document.querySelector('.selected');
        //             // If no subscription type was selected, show an error message and do nothing
        //             if (!selection) {
        //                 alert("Please select a subscription option.");
        //                 return false;
        //                 }
        //                 // Otherwise, get the value attribute of the selected subscription type
        //                 // and store it in a variable called frequency
        //                 let frequency = selection.getAttribute("value");
        //                 // Create a new FormData object to hold our data
        //                 let formData = new FormData();
        //                 // Append our data to the FormData object
        //                 formData.append("frequency", frequency);
        //                 // Send the data with fetch()
        //                 fetch("/subscribe", {method: "POST", body:formData})
        //                 .then(response => response.json())
        //                 .then(data => {
        //                     console.log(data);
        //                     window.location.href= "/dashboard";
        //                     })
        //                     .catch((error) => {
        //                         console.error('Error:', error);
        //                         });
        //                         });

        
 

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
function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const contacts = JSON.parse(localStorage.getItem('contacts')) || []; // Get existing contacts from localStorage or initialize an empty array

    // Get values from input fields
    const fullName = document.querySelector('#full-name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (fullName && email && message) { // Check if all inputs are not empty
        const newContact = {
            fullName: fullName,
            email: email,
            message: message
        };
        
        contacts.push(newContact); // Add the new contact to the contacts array
        localStorage.setItem('contacts', JSON.stringify(contacts)); // Save the updated contacts array to localStorage

        // Clear the input fields
        document.querySelector('#full-name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#message').value = '';
    }
}
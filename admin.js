document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('username')) {
        window.location.href = 'login.html'; // Redirect to the login page if not logged in
    }

    displayContacts();

    document.querySelector('#clear-contacts').classList.add('responsive-button');
    document.querySelector('#clear-contacts').addEventListener('click', function() {
        if (confirm('Are you sure you would like to clear all messages?')) {
            localStorage.removeItem('contacts');
            displayContacts();
        }
    });
});

function displayContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || []; // Get existing contacts from localStorage or initialize an empty array
    const contactList = document.querySelector('#contacts');
    contactList.innerHTML = ''; // Clear the current list

    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.textContent = `Name: ${contact.fullName}, Email: ${contact.email}, Message: ${contact.message}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('responsive-button');
        deleteButton.addEventListener('click', function() {
            deleteContact(index);
        });

        li.appendChild(deleteButton);
        contactList.appendChild(li);
    });
}

function deleteContact(index) {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.splice(index, 1); // Remove the contact at the given index
    localStorage.setItem('contacts', JSON.stringify(contacts)); // Update the contacts array in localStorage
    displayContacts(); // Update the displayed contacts
}
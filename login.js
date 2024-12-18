function login(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username === 'Lutordat' && password === 'Lutordat199x') {
        localStorage.setItem('username', username); // Store the username in localStorage
        window.location.href = 'admin.html'; // Redirect to the admin page
    } else {
        alert('This is not for you. Please go back!');
    }
}
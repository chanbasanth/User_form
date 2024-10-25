document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    document.getElementById('successMessage').style.display = 'block'; // Show success message
    document.getElementById('contactForm').reset(); // Reset form fields
});
document.addEventListener('DOMContentLoaded', () => {
    // JavaScript code for interactivity
});
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('feedbackName').value;
    const email = document.getElementById('feedbackEmail').value;
    const message = document.getElementById('feedbackMessage').value;
    const feedbackResult = document.getElementById('feedbackResult');

    // Simulated feedback handling
    feedbackResult.textContent = `Thank you for your feedback, ${name}! We will get back to you at ${email}.`;

    // Clear the form
    document.getElementById('feedbackForm').reset();

    // Here you would typically send the data to a server-side script or email service
    // For example, using Fetch API to send data to a server
    /*
    fetch('/submit-feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    }).then(response => {
        if (response.ok) {
            feedbackResult.textContent = 'Feedback submitted successfully!';
        } else {
            feedbackResult.textContent = 'Error submitting feedback. Please try again.';
        }
    }).catch(error => {
        feedbackResult.textContent = 'Error submitting feedback. Please try again.';
    });
    */
});







Telegram.WebApp.ready();

function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\+?\d{10,15}$/; // Regex for international phone numbers
    return phoneRegex.test(phoneNumber);
}

console.log('Form is ready.');

document.getElementById('submit-btn').addEventListener('click', () => {
    const jobTitle = document.getElementById('job-title').value;
    const jobDescription = document.getElementById('job-description').value;
    const contactEmail = document.getElementById('contact-email').value;
    const contactPhone = document.getElementById('contact-phone').value;

    console.log('Form submitted with:', { jobTitle, jobDescription, contactEmail, contactPhone });

    if (jobTitle && jobDescription) {
        const jobDetails = {
            jobTitle,
            jobDescription,
            contactEmail: contactEmail || 'N/A',
            contactPhone: contactPhone || 'N/A'
        };

        console.log('Sending data to Telegram:', jobDetails);

        // Debugging step: Verify if Telegram.WebApp is defined
        if (Telegram.WebApp) {
            Telegram.WebApp.sendData(JSON.stringify(jobDetails)); // Send data to the bot
            Telegram.WebApp.close(); // Close the web app
        } else {
            console.error('Telegram.WebApp is not defined');
        }
    } else {
        alert('Please fill out the job title and description.');
    }
});

Telegram.WebApp.expand();
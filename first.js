
const form = document.getElementById("contactForm");
const output = document.getElementById("output");

form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Get current date and time
    const now = new Date();

    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    // Display submitted details
    output.innerHTML = `
        <h2>Submitted Successfully!</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Phone Number:</strong> ${phone}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong> ${message}</p>

        <p><strong>Submission Date:</strong> ${date}</p>

        <p><strong>Submission Time:</strong> ${time}</p>
    `;

    // Reset form
    contactForm.reset();

});

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();  // Prevents the form from submitting the traditional way

    // Collect form data
    const formData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    console.log("Form Data: ", formData); // Log form data for debugging

    // Send data to Google Apps Script
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbw0zBFvZrlrXoYiwOnwvWJZYPJOUQhvNDiOJj5z1f8MXVKnt_eh-1h6oMFQ6bih90BPLQ/exec " , {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData), // Convert form data to JSON
        });

        // Check if the response is ok (status code 200)
        const responseData = await response.json();
        console.log("Response Data:", responseData);  // Log the response from the server

        if (response.ok) {
            alert("Registration successful!");
        } else {
            alert("Failed to register. Reason: " + responseData.message);
        }
    } catch (error) {
        console.error("Error submitting form:", error);  // Log any errors for debugging
        alert("There was an error with the registration. Please try again.");
    }
});

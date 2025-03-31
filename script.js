function toggleReadMore(summaryId, contentId, buttonId, containerId) {
    let summary = document.getElementById(summaryId);
    let content = document.getElementById(contentId);
    let button = document.getElementById(buttonId);
    let container = document.getElementById(containerId);

    if (content.style.display === "none" || content.style.display === "") {
        summary.style.display = "none";  // Hide summary
        content.style.display = "block"; // Show full text
        button.innerText = "Read Less";
        container.appendChild(button); // Move button below full text
    } else {
        summary.style.display = "block"; // Show summary
        content.style.display = "none";  // Hide full text
        button.innerText = "Read More";
        container.insertBefore(button, content); // Move button back to original position
    }
}

document.getElementById("nominationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    
    alert("Your nomination has been submitted successfully!");
    
    // Redirect to home page
    window.location.href = "index.html";
});

function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}



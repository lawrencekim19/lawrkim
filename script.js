function displayMessage(category) 
{
    const message = document.getElementById('result-message');
    message.textContent = You selected: ${category};
    message.style.color = "#ffeb3b"; // Bright yellow text for feedback
}

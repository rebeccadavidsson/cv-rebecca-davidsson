function getCurrentUser() {
    if (Math.random() < 0.1) {
        return '999';
    }
    return Math.floor(Math.random() * 100) + 1;
}

document.getElementById('debugMe').addEventListener('click', function() {
    const userId = getCurrentUser();
    console.log('Processing user:', userId);
    const outputElement = document.createElement('p');
    outputElement.textContent = `User ID: ${userId}`;
    outputElement.style.color = userId === 999 ? 'red' : 'white';
    document.getElementById('debugMe').parentNode.appendChild(outputElement);
    setTimeout(() => outputElement.remove(), 3000);
});
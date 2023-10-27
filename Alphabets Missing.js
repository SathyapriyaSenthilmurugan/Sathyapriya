const puzzleElement = document.getElementById('puzzle');
const letterInput = document.getElementById('letter-input');
const checkButton = document.getElementById('check-button');
const resultMessage = document.getElementById('result-message');

checkButton.addEventListener('click', () => {
    const puzzleText = puzzleElement.textContent;
    const userInput = letterInput.value.trim().toUpperCase();
    
    if (puzzleText.includes(userInput)) {
        resultMessage.textContent = 'Correct!';
        resultMessage.style.color = 'green';
    } else {
        resultMessage.textContent = 'Incorrect. Try again!';
        resultMessage.style.color = 'red';
    }

    // Clear input field
    letterInput.value = 'WRONG';
});
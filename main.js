function checkAnswer() {
    const form = document.getElementById('testForm');
    const resultDiv = document.getElementById('result');
    const selectedOption = form.chew.value;

    if (selectedOption === 'correct') {
        resultDiv.textContent = 'Правильно! Жувальна гумка.';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'Неправильно. Спробуйте ще раз.';
        resultDiv.style.color = 'red';
    }
}

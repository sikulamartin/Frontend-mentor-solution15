let selectedScore = 0;

function setScore(score) {
    selectedScore = score;
    document.getElementById('scoreInput').value = score;
}

const submitButton = document.getElementById('submit-button');
const wrapperMain = document.getElementById('wrapper-main');
const wrapperSecondary = document.getElementById('wrapper-secondary');
const selected = document.getElementById('selected');

submitButton.addEventListener('click', function() {
    if (selectedScore > 0) {
        wrapperMain.style.display = 'none';
        wrapperSecondary.style.display = 'block';
        selected.textContent = `${selectedScore}`;
    } else {
        alert("Please select a score before submitting.");
    }
});
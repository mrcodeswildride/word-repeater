var wordInput = document.getElementById("word");
var timesToRepeatInput = document.getElementById("timesToRepeat");
var submitButton = document.getElementById("submit");
var wordsDisplay = document.getElementById("words");

submitButton.addEventListener("click", submit);

function submit() {
    var word = wordInput.value.trim();
    var timesToRepeat = timesToRepeatInput.value.trim();

    if (word.length > 0 && !isNaN(timesToRepeat)) {
        for (var i = 0; i < timesToRepeat; i++) {
            wordsDisplay.innerHTML = wordsDisplay.innerHTML + " " + word;
        }
    }
}

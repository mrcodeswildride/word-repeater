let word = document.getElementById(`word`)
let repeat = document.getElementById(`repeat`)
let submitButton = document.getElementById(`submitButton`)
let wordsParagraph = document.getElementById(`wordsParagraph`)

submitButton.addEventListener(`click`, submit)

function submit() {
  let wordValue = word.value.trim()
  let repeatValue = repeat.value.trim()

  if (wordValue != `` && repeatValue != `` && !isNaN(repeatValue)) {
    for (let i = 0; i < repeatValue; i++) {
      wordsParagraph.innerHTML = `${wordsParagraph.innerHTML} ${wordValue}`
    }
  }
}
const rating = document.querySelectorAll('.btn')
const submit = document.querySelector('.submit-btn')
const rateCard = document.querySelector(".rate-card")
const thanksCard = document.querySelector(".thanks-card")
const ratingOutcome = document.querySelector(".rating-outcome")

rating.forEach(btn => {
    btn.addEventListener('click', () => ratingClicked(btn))
}
)

function ratingClicked(btn) {
    rating.forEach(rating => rating.removeAttribute('id', 'clicked'))
    btn.setAttribute('id', 'clicked')
}


submit.addEventListener('click', handleSubmit)

function handleSubmit() {
    const selectedRating = document.querySelector('#clicked')

    if (selectedRating == null) {
        alert("Please select a rating")
    } else {

        rateCard.classList.add("hidden")
        ratingOutcome.innerHTML = `You selected ${selectedRating.value} out of 5`
        thanksCard.classList.remove('hidden')
    }
}
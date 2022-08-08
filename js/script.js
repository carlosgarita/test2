


//Add active class:

function setThisButtonActive(button) {
    button.classList.add("ratingButtonActiveState");
}

//Remove active class from the rest of the buttons:

function resetActiveButton() {
    document.querySelectorAll(".ratingButtonActiveState").forEach((button) => {
        button.classList.remove("ratingButtonActiveState");
    });
}



document.querySelectorAll(".ratingButton").forEach((button) => {
    button.addEventListener("click", function() {
        resetActiveButton();
        setThisButtonActive(button);
        retrieveTextFromButton(button);
    });
});


//Text changing

function retrieveTextFromButton(button) {
    document.querySelector(".numberSelected").textContent = button.textContent;
}


//numberSelected.textContent = textRetrieved;

document.querySelector(".CTA").addEventListener('click', changeVisibility);

function changeVisibility() {
    document.querySelector(".card").classList.add("visibility");
    document.querySelector(".card2").classList.remove("visibility");
}
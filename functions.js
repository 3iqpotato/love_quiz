const questions = [
    "Обичаш ли Свети Валентин?",
    "Знаеш ли че имаш най-хубавите зелени очи?",
    "Искаш ли да гледаме романтични филми?",
    "Вярваш ли че те обичам ужасно силно?",
    "Обичаш ли изненадите?",
    "Знаеш ли че си най-красивата?",
    "Ще бъдеш ли моята валентинка? ❤️"
];

let currentQuestion = 0;

function loadQuestion() {
    document.getElementById("question").textContent = questions[currentQuestion];
}

function answer(isYes) {
    if (currentQuestion === questions.length - 1 && !isYes) {
        let noButton = document.getElementById("no");
        let yesButton = document.getElementById("yes");

        // Добавяме клас за анимация
        noButton.classList.add("hide-button");

        // Показваме съобщение
        let message = document.createElement("p");
        message.id = "error-message";
        message.textContent = "Опс! Този бутон не трябваше да е тук :)";
        document.querySelector(".container").appendChild(message);

        // След 3 секунди премахваме бутона и центрираме "Да"
        setTimeout(() => {
            noButton.style.display = "none";
            message.remove();
            yesButton.style.width = "100%";
            yesButton.style.fontSize = "24px";
        }, 5000);

        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".container").innerHTML = "<h1>Честит Свети Валентин любов моя! ❤️</h1>";
        document.querySelector(".container").innerHTML += "<h1>Обичам те повече от всичко!!!</h1>";
        document.querySelector(".container").innerHTML += "<img src='https://i.pinimg.com/originals/d9/6b/c6/d96bc6b98cdd8c42303cab8dc4711e1e.gif'>";
    }
}

loadQuestion();

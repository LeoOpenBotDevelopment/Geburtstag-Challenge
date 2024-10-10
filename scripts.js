const questionContainer = document.getElementById('questionContainer');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answerButtons');
const nextButton = document.getElementById('nextButton');
const quizContainer = document.getElementById('quizContainer');

const questions = [
    {
        question: "<h3>Wer ist die Hauptfigur in der 'Throne of Glass'-Serie?</h3>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Aelin Ashryver Galathynius</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Dorian Havilliard</button>
	    <button class='questionbtn' onclick='selectAnswer(true, this)'>Celaena Sardothien</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Chaol Westfall</button>
        `
    },
    {
        question: "<h3>Was ist das ursprüngliche Berufsziel von Celaena?</h3>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(true, this)'>Assassine</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Kriegerin</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Magierin</button>
	    <button class='questionbtn' onclick='selectAnswer(true, this)'>Assassine</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Diebin</button>
        `
    },
    {
        question: "<h3>Welcher König herrscht über das Reich von Adarlan?</h3>",
        answers: `
	    <button class='questionbtn' onclick='selectAnswer(false, this)'>König Aedion</button>
            <button class='questionbtn' onclick='selectAnswer(true, this)'>König Havilliard</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>König Rowan</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>König Dorian</button>
        `
    },
    {
        question: "<h3>Welches magische Element spielt eine große Rolle in der Geschichte?</h3>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(true, this)'>Feuer</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Wasser</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Erde</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Luft</button>
        `
    },
    {
        question: "<h3>Welcher Charakter wird als Celaenas Freund und Vertrauter beschrieben?</h3>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Dorian</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Chaol</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Aedion</button>
	    <button class='questionbtn' onclick='selectAnswer(true, this)'>Nehemia</button>
        `
    },
    {
        question: "<h3>Was ist der Name des Turniers, an dem Celaena teilnimmt?</h3>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Das Turnier der Magier</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Der große Krieg</button>
	    <button class='questionbtn' onclick='selectAnswer(true, this)'>Die Wettkämpfe</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Die Arena der Tode</button>
        `
    },
    {
        question: "<h3>Welches Reich ist Celaena im ersten Buch loyal?</h3>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(true, this)'>Adarlan</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Terrasen</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Morath</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Doranelle</button>
        `
    },
    {
        question: "<h3>Welcher Charakter ist der Hauptantagonist in der Serie?</h3>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(true, this)'>Die Königin von Morath</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>König Havilliard</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Crown Prince Dorian</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Lord of the Wyrd</button>
        `
    },
    {
        question: "<h3>Was ist Celaenas größter Traum?</h3>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Ein normales Leben zu führen</button>
	    <button class='questionbtn' onclick='selectAnswer(true, this)'>Ihren eigenen Thron zu besteigen</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Eine mächtige Magierin zu werden</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Das Land zu retten</button>
        `
    },
    {
        question: "<h3>findest du die lüge?</h3><h4>klicke auf die lüge</h4>",
        answers: `
            <p class="pTag">In den Weiten von Erilea, wo der Wind durch die Bäume flüstert und alte Geheimnisse in den Schatten lauern, begann eine Reise, die von Legenden erzählt wurde. Celaena Sardothien, eine Assassine ohnegleichen, wanderte durch die Lande auf der Suche nach der Wahrheit. Viele glaubten, sie wäre allein, <span onclick='selectAnswer(true, this)'>doch sie hatte einen geheimen Verbündeten</span>. Die Prüfungen, die sie erwarteten, waren von Magie und Intrigen durchzogen, doch niemals verlor sie den Glauben an ihren unerschütterlichen Mut.</p>
            <p class="pTag">Die Tore des Königsreichs öffneten sich nur für die Tapfersten, und in den dunklen Gängen des Schlosses fand Celaena Dinge, die niemand zuvor entdeckt hatte. Bücher, die in uralten Sprachen geschrieben waren, beschrieben längst vergessene Rituale und Kräfte, die nicht von dieser Welt stammten. Die größte Überraschung aber war, dass sie in den vergessenen Gemächern des Königs eine Nachricht fand, die nur an sie gerichtet war.</p>
            <p class="pTag">Inmitten des Chaos fand sie jedoch einen Weg, um sich selbst zu retten. „Nur die Wahrheit kann uns frei machen“, dachte sie. Aber war alles, was sie wusste, wirklich wahr? Vielleicht versteckte sich eine Lüge tief in der Geschichte, nur darauf wartend, von einem wahren Fan entdeckt zu werden.</p>
        `
    }
];


let currentQuestionIndex = 0;

function startGame() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
    //startColorChange();
}

function showQuestion(question) {
    questionElement.innerHTML = question.question;
    answerButtons.innerHTML = question.answers; // Setze die Antworten als HTML-Code

    if (question.answers.length > 0) {
        nextButton.style.display = 'none'; // Nächster Button verstecken 
    } else {
        nextButton.style.display = 'block'; // Nächster Button anzeigen, wenn keine Antworten vorhanden
    }
}

function selectAnswer(correct, thiselementwasclicked) {
    if (correct) {
        //alert('Richtig!');
	thiselementwasclicked.style.background = "green";
    } else {
        //alert('Falsch!');
	thiselementwasclicked.style.background = "red";
    }
    nextButton.style.display = 'block'; // Nächster Button anzeigen
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
	document.getElementById("imageModal").style.display = "block";
	startConfetti();
    }
});

function startColorChange() {
    let hue = 0;
    setInterval(() => {
        hue += 1; // Erhöhe den Farbton
        quizContainer.style.backgroundColor = `hsl(${hue}, 100%, 75%)`;
        if (hue >= 360) hue = 0; // Zurücksetzen des Farbtons
    }, 100); // Alle 100 ms ändern
}

function closeModal() {
        document.getElementById("imageModal").style.display = "none";
	currentQuestionIndex = 0; // Optional: Fragen zurücksetzen
        //startGame();
	window.location.href = "index2.html";
}

// Bild herunterladen
function downloadImage() {
        const image = document.getElementById("Geschenk-Bild");
        const link = document.createElement('a');
        link.href = image.src;
        link.download = 'Geschenk-Bild.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
}
function createConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti';
        confettiContainer.style.left = Math.random() * 100 + 'vw';
        //confettiContainer.style.color = hsl(${Math.random() * 360}, 100%, 50%);
        confettiContainer.textContent = "♥";
        document.body.appendChild(confettiContainer);
        setTimeout(() => {
            confettiContainer.remove();
        }, 4000);
}
function startConfetti() {
    //setInterval(createConfetti, 100);
    for (let i = 0; i < 50; i++) {
        setTimeout(createConfetti, i * 100);
    }
}

startGame();

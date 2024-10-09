const questionContainer = document.getElementById('questionContainer');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answerButtons');
const nextButton = document.getElementById('nextButton');
const quizContainer = document.getElementById('quizContainer');

const questions = [
    {
        question: "<h2>Wer ist die Hauptfigur in der 'Throne of Glass'-Serie?</h2>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(true, this)'>Celaena Sardothien</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Aelin Ashryver Galathynius</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Dorian Havilliard</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Chaol Westfall</button>
        `
    },
    {
        question: "<h2>Was ist das ursprüngliche Berufsziel von Celaena?</h2>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(true, this)'>Assassine</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Kriegerin</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Magierin</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Diebin</button>
        `
    },
    {
        question: "<h2>Welcher König herrscht über das Reich von Adarlan?</h2>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(true, this)'>König Havilliard</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>König Rowan</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>König Dorian</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>König Aedion</button>
        `
    },
    {
        question: "<h2>Welches magische Element spielt eine große Rolle in der Geschichte?</h2>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(true, this)'>Feuer</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Wasser</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Erde</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Luft</button>
        `
    },
    {
        question: "<h2>Welcher Charakter wird als Celaenas Freund und Vertrauter beschrieben?</h2>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(true, this)'>Nehemia</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Dorian</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Chaol</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Aedion</button>
        `
    },
    {
        question: "<h2>Was ist der Name des Turniers, an dem Celaena teilnimmt?</h2>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(true, this)'>Die Wettkämpfe</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Das Turnier der Magier</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Der große Krieg</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Die Arena der Tode</button>
        `
    },
    {
        question: "<h2>Welches Reich ist Celaena im ersten Buch loyal?</h2>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(true, this)'>Adarlan</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Terrasen</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Morath</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Doranelle</button>
        `
    },
    {
        question: "<h2>Welcher Charakter ist der Hauptantagonist in der Serie?</h2>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(true, this)'>Die Königin von Morath</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>König Havilliard</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Crown Prince Dorian</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Lord of the Wyrd</button>
        `
    },
    {
        question: "<h2>Was ist Celaenas größter Traum?</h2>",
        answers: `
            <button class='questionbtn' onclick='selectAnswer(true, this)'>Ihren eigenen Thron zu besteigen</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Ein normales Leben zu führen</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Eine mächtige Magierin zu werden</button>
            <button class='questionbtn' onclick='selectAnswer(false, this)'>Das Land zu retten</button>
        `
    },
    {
        question: "<h2>findest du die lüge?</h2><h4>klicke auf die lüge</h4>",
        answers: `
            <p>In den Weiten von Erilea, wo der Wind durch die Bäume flüstert und alte Geheimnisse in den Schatten lauern, begann eine Reise, die von Legenden erzählt wurde. Celaena Sardothien, eine Assassine ohnegleichen, wanderte durch die Lande auf der Suche nach der Wahrheit. Viele glaubten, sie wäre allein, <span onclick='selectAnswer(true, this)'>doch sie hatte einen geheimen Verbündeten</span>. Die Prüfungen, die sie erwarteten, waren von Magie und Intrigen durchzogen, doch niemals verlor sie den Glauben an ihren unerschütterlichen Mut.</p>
            <p>Die Tore des Königsreichs öffneten sich nur für die Tapfersten, und in den dunklen Gängen des Schlosses fand Celaena Dinge, die niemand zuvor entdeckt hatte. Bücher, die in uralten Sprachen geschrieben waren, beschrieben längst vergessene Rituale und Kräfte, die nicht von dieser Welt stammten. Die größte Überraschung aber war, dass sie in den vergessenen Gemächern des Königs eine Nachricht fand, die nur an sie gerichtet war.</p>
            <p>Inmitten des Chaos fand sie jedoch einen Weg, um sich selbst zu retten. „Nur die Wahrheit kann uns frei machen“, dachte sie. Aber war alles, was sie wusste, wirklich wahr? Vielleicht versteckte sich eine Lüge tief in der Geschichte, nur darauf wartend, von einem wahren Fan entdeckt zu werden.</p>
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
        alert('Quiz beendet!'); // Quiz wird beendet, wenn alle Fragen gefragt wurden
        currentQuestionIndex = 0; // Optional: Fragen zurücksetzen
        startGame(); // Quiz zurücksetzen
		window.location.href = "index2.html";
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

startGame();

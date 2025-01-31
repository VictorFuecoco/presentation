function showSubButtons(index) {
    // Ukryj wszystkie podprzyciski
    document.querySelectorAll('.sub-buttons').forEach(div => {
        div.style.display = 'none';
    });

    // Pokaż tylko odpowiedni zestaw podprzycisków
    document.getElementById(`sub-buttons-${index}`).style.display = 'block';
}

function showInstructions(option) {
    const instructionsText = {
        1: "Instrukcja dla opcji 1A",
        2: "Instrukcja dla opcji 1B",
        3: "Instrukcja dla opcji 2A",
        4: "Instrukcja dla opcji 2B",
        5: "Instrukcja dla opcji 3A",
        6: "Instrukcja dla opcji 3B"
    };

    document.getElementById("instructions").innerText = instructionsText[option] || "Brak instrukcji";
}

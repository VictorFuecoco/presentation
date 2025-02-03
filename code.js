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
        1: "Inspect where and when the card twists, check each area one by one seperately until you narrow the issue down, remember it could be multiple factors at play",
        2: "Check the pallet how sticky it is and weather it's not being held down, make sure the air lifts and seperates the sheets correctly and make sure it't not bumping into anything",
        3: "Clean the belts, follow the 7 steps of setting up a feeder",
        4: "Check with a sheet of paper how it cuts and the pressure",
        5: "Make sure the pallet is snug and perfectly square inside feeder, press start and check quality",
        6: "adjust gently little by little with the distance"
    };

    document.getElementById("instructions").innerText = instructionsText[option] || "Brak instrukcji";
}

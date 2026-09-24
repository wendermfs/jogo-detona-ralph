const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {
        gameVelocity: 2000,
        hitPosition: 0,
        result: 0,
        currentTime: 10, // 1:30
    },
    actions: {
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    },
};

function countDown() {
    state.values.currentTime--;
    // 3. Calcula minutos e segundos
    let minutos = Math.floor(state.values.currentTime / 60);
    let segundos = state.values.currentTime % 60;

    // 4. Formata os segundos para terem sempre 2 dígitos (ex: "09" em vez de "9")
    let segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;

    // 5. Atualiza o texto na tela
    state.view.timeLeft.textContent = `${minutos}:${segundosFormatados}`;
    // 2. Trava quando chega a zero (Game Over)

    if (state.values.currentTime <= 0) {
        clearInterval(state.actions.timerId);
        clearInterval(state.actions.timerId); // Substitui pelo teu ID do setInterval
        setTimeout(() => {
            alert("Game Over! O seu resultado foi: " + state.values.result);
            window.location.reload();
        }, 100);
    }

}
function playSound(audioName) {
    let audio = new Audio(`./src/sound/${audioName}.m4a`);
    audio.volume = 0.3;
    audio.play();
}

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit");
            }
        });
    });
}

function main() {
    addListenerHitBox();
}

main();
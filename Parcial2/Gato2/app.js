'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const $gato = document.getElementById('gato');
    const btnReset = document.getElementById('btnReset');
    const getInitialValue = () => [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    let gato = getInitialValue();

    const checarSiJugadorGano = (jugador) => {
        for (let i = 0; i < 3; i++) {
            // Verifica filas
            if (gato[i].every(x => x === jugador)) return true;
            // Columnas
            if(gato.every(x => x[i] === jugador)) return true;
        }
        // Verifica diagonales
        if (gato[0][0] === jugador && gato[1][1] === jugador && gato[2][2] === jugador) {
            return true;
        }
        if (gato[0][2] === jugador && gato[1][1] === jugador && gato[2][0] === jugador) {
            return true;
        }
        return false;
    };

    const cells = Array.from($gato.children);

    let isUser1 = true;
    let endGame = false;
    $gato.addEventListener('click', e => {
        if (endGame) return;
        const celda = e.target;
        const i = cells.indexOf(celda) + 1;

        const row = Math.floor((i - 1) / 3); // Calcula la fila
        const col = (i - 1) % 3; // Calcula la columna

        if(gato[row][col] !== 0) return;

        gato[row][col] = +!isUser1 + 1;
        isUser1 = !isUser1;

        celda.innerHTML = `<img src="img/${isUser1 ? 'User1' : 'User2'}.png" class="img-user pe-none" alt=""/>`;

        const jugador1Gano = checarSiJugadorGano(1);
        const jugador2Gano = checarSiJugadorGano(2);

        if (jugador1Gano) {
            Swal.fire('Juego finalizado', 'Gano jugador 1', 'info');
        } else if (jugador2Gano) {
            Swal.fire('Juego finalizado', 'Gano jugador 2', 'info');
        }

        if(jugador2Gano || jugador1Gano){
            endGame = true;
            btnReset.classList.remove('d-none');
        }
    });

    btnReset.addEventListener('click', () => {
        endGame = false;
        cells.forEach(x => x.innerHTML = '');
        gato = getInitialValue();
        isUser1 = true;
        btnReset.classList.add('d-none');
    });
});

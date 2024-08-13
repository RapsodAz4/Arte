function mostrarFrases() {
    const frases = [
        "El éxito no es el final, el fracaso no es fatal: es el coraje para continuar lo que cuenta.",
        "No cuentes los días, haz que los días cuenten.",
        "El único límite a nuestros logros de mañana es nuestra duda de hoy.",
        "La vida es 10% lo que nos sucede y 90% cómo reaccionamos ante ello.",
        "No te preocupes por fallar, preocúpate por no intentarlo.",
        "La paciencia es amarga, pero su fruto es dulce.",
        "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "El conocimiento se adquiere leyendo la letra pequeña. La experiencia se adquiere leyendo la letra grande.",
        "La mejor manera de predecir el futuro es crearlo.",
        "El aprendizaje nunca agota la mente."
    ];



    const frasesContainer = document.getElementById("frasesContainer");
    frasesContainer.innerHTML = ""; // Limpiar frase anterior

    // Obtener una frase aleatoria
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    const p = document.createElement("p");
    p.textContent = fraseAleatoria;
    frasesContainer.appendChild(p);
}

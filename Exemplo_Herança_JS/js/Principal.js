import Professor from "./Professor.js";

function iniciar(){
    let professor = new Professor("Goku", " Kakaroto", 25, "programar e ler", "PWFE", 10);
    professor.saudacao();
}

document.addEventListener("DOMContentLoaded",iniciar);


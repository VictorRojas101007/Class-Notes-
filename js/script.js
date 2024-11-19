function Start() {

    const nombre = document
     .getElementById("nameUser");
   
    const notaUser = parseFloat(document
     .getElementById("notaUser").value);
   
    const maxNota = parseFloat(document.getElementById("maxNotaUser").value);
   
    const percentUser = (notaUser /
     maxNota) * 100;
   
    const puntosPerdidos = maxNota -
     notaUser;
   
    const allLi = document
     .querySelectorAll("p");
   
    allLi[1].innerHTML = nombre.value;
   
    allLi[3].innerHTML=notaUser;
   
    allLi[5].innerHTML = nombre.value +
     ", tu puntaje es: " + notaUser +
     " de " + maxNota + " puntos";
   
    allLi[8].innerHTML =
     "Tu porcentaje de aprobación es " +
     percentUser + "%";
   
    allLi[10].innerHTML =
     "La cantidad de puntos que perdiste es: " +
     puntosPerdidos;
   
   }
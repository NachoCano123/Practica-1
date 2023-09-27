function Ordenarydevolverprimero(miarr)
{
    //Ordenamos el array de strings por orden alfabetico
    const arrOrdenado=miarr.sort();

    //Tomamos el primer valor del array ya ordenado
    const primerValor=arrOrdenado[0];

    //Devolvemos ese primer valor separando sus letras con espacios
    const letrasSeparadas=primerValor.split('').join(' ');

    return letrasSeparadas;
}

const arrstrings=["Lengua", "Matematicas", "Arte", "Tecnologia", "Musica"];
const resultado=Ordenarydevolverprimero(arrstrings);
console.log(resultado);
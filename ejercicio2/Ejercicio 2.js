function multiplos(numero) 
{
    const resultados=[];
    for (let i=0; i<=numero; i++) 
    {
        if (i%3===0 || i%5===0) 
        {
            resultados.push(i);
        }
    }
    return resultados;
}

// Ejemplo de uso:
const numero=30;
const mismultiplos=multiplos(numero);
console.log(mismultiplos);
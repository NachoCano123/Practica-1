function multiplos(numero) 
{
    const resultados=[];
    //Hacemos un bucle for que acabe cuando el contador sea menor o igual al numero
    for (let i=0; i<=numero; i++) 
    {
        //Si el numero es multiplo de 3 o de 5 se añade al array
        if (i%3===0 || i%5===0) 
        {
            resultados.push(i);
        }
    }
    return resultados;
}

const numero=30;
const mismultiplos=multiplos(numero);
console.log(mismultiplos);
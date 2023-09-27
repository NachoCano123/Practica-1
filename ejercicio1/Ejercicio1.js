//Ejercicio 1 Jose Ignacio Cano Alonso

let array=[9,6,8,4,35,64,5,2,7,3,4];
let sortedArray=quickSort(array);
console.log(sortedArray);

function quickSort(arr) {
    //Si la matriz tiene 1 o 0 elementos, ya está ordenada
    if(arr.length<=1)
    {
        return arr;
    }
  
    //Seleccionamos el último elemento del array como pivote
    let pivot=arr[arr.length-1];
  
    //Creamos dos matrizes: una con los elementos menores que el pivote y otra con los mayores o iguales que el pivote
    let left=[];
    let right=[];
  
    //Vamos por el bucle for, si un elemento del array es menor al pivote, lo ponemos en el array de la izquierda, si no, lo ponemos en el array de la derecha
    for(let i=0; i<arr.length-1; i++)
    {
        if(arr[i]<pivot) 
        {
            left.push(arr[i]);
        }
        else 
        {
            right.push(arr[i]);
        }
    }
  
    //Combinamos las dos submatrices ordenadas junto con el pivote
    return[...quickSort(left), pivot, ...quickSort(right)];
  }
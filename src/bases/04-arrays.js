const array = [1,2,3,4]
//También se pueden crear como new Array() pero es poco común

array.push(5)

const array2 = [ ...array ]

array2.push(6)

//Cuando ocupamos métodos propios del prototipo como map generan una nueva referencia
//de lo que retornan como arreglo
const array3 = array2.map( (n) => {
    return n * 2
} )

array3.push(14)

console.log(array)
console.log(array2)
console.log(array3)